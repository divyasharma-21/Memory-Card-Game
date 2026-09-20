import GameHeader from './components/GameHeader';
import Card from './components/Card';
import Winmsg from './components/Winmsg';
import { useState } from 'react';
import { useEffect } from 'react';
const cardValues = ['🍕', '🍔', '🍟', '🌭', '🍿', '🍩', '🍦', '🎂', '🍟', '🍩', '🍕', '🍦', '🎂', '🍔', '🌭', '🍿'];
function App() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isLocked, setIsLocked] = useState(false); // New state to lock the game during card flip animations

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const initializeGame = () => {
    const shuffledValues = shuffleArray([...cardValues]);
    const finalCards = shuffledValues.map((value, index) => ({
      id: index,
      value,
      isFlipped: false,
      isMatched: false
    }));
    setCards(finalCards); 
    setFlippedCards([]);
    setMatchedCards([]);
    setIsLocked(false);
    setScore(0);
    setMoves(0);
  };
  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (card) => {
    if (card.isFlipped || card.isMatched || isLocked || flippedCards.length === 2) return; // Ignore clicks on flipped or matched cards
    setMoves(prevMoves => prevMoves + 1);

    const newCards = cards.map(c => {
      if (c.id === card.id) {
        return { ...c, isFlipped: true }; // Flip the clicked card
      }
      else { return c; }

    });
    setCards(newCards);
    const newFlippedCards = [...flippedCards, card.id];
    setFlippedCards(newFlippedCards);

    if (flippedCards.length === 1) {
      setIsLocked(true);
      const firstcard = cards[flippedCards[0]];
      if (firstcard.value === card.value) {

        setScore(prevScore => prevScore + 1);
        setTimeout(() => {
        setMatchedCards(prevMatched => [...prevMatched, firstcard.id, card.id]);
        setCards((prevCards) => prevCards.map(c => {
          if (c.id === card.id || c.id === firstcard.id) {
            return { ...c, isMatched: true }; // Mark the clicked card as matched
          }
          else { return c; }

        }));
        setFlippedCards([]);
        setIsLocked(false); // Unlock the game after processing the match
       },500); // Reset flipped cards after a match
      }
      else {
        setTimeout(() => {
          const resetCard = newCards.map(c => {
            if (c.id === firstcard.id || c.id === card.id) {
              return { ...c, isFlipped: false }; // Flip back the cards if they don't match
            }
            return c;
          });
          setCards(resetCard);
          setFlippedCards([]);
          setIsLocked(false); // Unlock the game after flipping back the cards
        }, 1000);
      }
    }
  };
  const isGameWon = score=== 8;
  return (
    <div className="app">
      <GameHeader score={score} moves={moves} onReset={initializeGame} />
      {isGameWon && <Winmsg moves={moves} />}
      <div className="cards-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  )
}


export default App;
