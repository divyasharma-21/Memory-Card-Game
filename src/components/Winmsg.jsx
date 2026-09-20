function Winmsg({ moves }) { 
    return (
        <div className="winmsg">
            <h1>Congratulations! You won!</h1>
            <p>You completed the game in {moves} moves!</p>
        </div>
    );
}
export default Winmsg;