# 🍕 Food Memory Game

A browser-based **Food Memory Game** developed using **React.js** where players test their memory by finding matching pairs of food-themed cards. The game includes interactive card flipping, food pair matching, automatic mismatch handling, game completion detection, and restart functionality.

## 🌐 Live Demo

🔗 https://divyasharma-21.github.io/Memory-Card-Game/

---

# 📌 Project Description

This project is an interactive **Food Memory Game** designed to provide a fun and engaging memory-based gaming experience directly in the browser.

The game presents a collection of cards containing different food emojis. Each food item appears as a matching pair, and the player's objective is to find all matching pairs.

At the beginning of the game, all cards are hidden. The player selects two cards at a time to reveal the food items.

If both cards contain the same food item, they are considered a matching pair and remain visible. If the food items are different, the cards are automatically flipped back after a short delay.

The game continues until all food pairs have been successfully matched.

The project was built using **React.js** to practice component-based development, state management, event handling, conditional rendering, and interactive game logic.

---

# ✨ Features

## 1. Food Card Selection

Before starting the game, all food cards are displayed face-down.

Players can click on any card to reveal the hidden food item.

Example:

```text
┌─────┐
│  ?  │
└─────┘
```

After selecting a card:

```text
┌─────┐
│ 🍕  │
└─────┘
```

The selected food emoji becomes visible.

---

## 2. Interactive Game Board

The game board contains multiple cards arranged in a grid.

Each card represents a hidden food item.

Players interact with the cards by clicking them one at a time and attempting to remember their positions.

Example food items include:

```text
🍕  🍔  🍟  🌭
🍩  🍎  🍉  🍔
🍕  🍟  🌭  🍩
🍎  🍉
```

The exact number of cards depends on the game configuration.

---

## 3. Food Pair Matching

After the player selects two cards, the game compares their food values.

### Matching Pair

Example:

```text
🍕 | 🍕
```

If both cards contain the same food item, they form a matching pair.

The cards remain visible and are marked as matched.

### Non-Matching Pair

Example:

```text
🍔 | 🍟
```

If the selected food items are different, the cards are automatically flipped back after a short delay.

---

## 4. Card Flip Logic

The game allows the player to reveal a maximum of two cards at a time.

The card flow works as follows:

```text
Hidden Card
     ↓
First Card Selected
     ↓
Second Card Selected
     ↓
Compare Food Items
   ↙           ↘
Match        No Match
  ↓              ↓
Stay Open    Flip Back
```

This creates the core memory challenge of the game.

---

## 5. Preventing Invalid Moves

The game prevents invalid card selections during gameplay.

Players cannot:

* Select more than two cards at the same time.
* Select an already matched card.
* Select the same card twice.
* Select additional cards while two unmatched cards are being checked.

This ensures that the game follows the correct matching sequence.

---

## 6. Automatic Card Reset

When two selected food cards do not match, the game waits for a short period before hiding them again.

For example:

```text
🍔 | 🍟
```

After the delay:

```text
❓ | ❓
```

This gives the player enough time to remember the selected food items before they are hidden.

---

## 7. Matched Cards Remain Visible

When two cards contain the same food item, both cards remain revealed.

Example:

```text
🍕 | 🍕
```

The matched cards remain visible and cannot be selected again.

This allows the player to keep track of the pairs they have already discovered.

---

## 8. Game Completion

The game continuously tracks the player's matched cards.

Once every food pair has been discovered, the game is completed.

The player can then restart the game and try to complete it again.

---

## 9. Reset Game

The reset functionality allows players to start a new game.

When the game is reset:

* Cards are returned to their initial state.
* Flipped cards are cleared.
* Matched cards are cleared.
* Game progress is reset.
* A new game can be started.

---

# 💻 Technologies Used

* **React.js** – Building the interactive game interface
* **JavaScript** – Game logic and state management
* **HTML5** – Application structure
* **CSS3** – Styling and responsive design
* **Vite** – Development environment and build tool

The project uses **React.js** and its state management capabilities to create an interactive browser-based memory game.

---

# 📂 Project Structure

```text
FOOD-MEMORY-GAME/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

# 🧠 Algorithm Used

The game follows a simple memory matching algorithm.

### Step 1

The game creates a collection of food cards containing matching pairs.

For example:

```text
🍕 🍔 🍟 🌭 🍕 🍔 🍟 🌭
```

### Step 2

The cards are displayed face-down on the game board.

```text
❓ ❓ ❓ ❓
❓ ❓ ❓ ❓
```

### Step 3

The player selects the first card.

The selected card is flipped and its food emoji becomes visible.

Example:

```text
🍕 ❓ ❓ ❓
```

### Step 4

The player selects the second card.

Example:

```text
🍕 🍟 ❓ ❓
```

### Step 5

The game compares both selected food items.

If they match:

```text
🍕 🍕
```

The cards remain visible.

### Step 6

If the cards do not match:

```text
🍕 🍟
```

The game waits briefly and flips both cards back.

### Step 7

The player continues selecting cards and searching for matching food pairs.

### Step 8

The game ends when all food pairs have been matched.

---

# ⚛️ React Concepts Used

This project demonstrates several important React concepts.

### State Management

React state is used to manage information such as:

```text
cards
flippedCards
matchedCards
```

These states control how the game behaves and what is displayed on the screen.

### Event Handling

Click events are used to detect when a player selects a food card.

### Conditional Rendering

The appearance of each card changes depending on its current state.

A card can be:

* Hidden
* Flipped
* Matched

### Component-Based Development

The game interface is divided into React components, making the application easier to understand, maintain, and extend.

### Array Manipulation

JavaScript array operations are used to create, update, compare, and manage the food cards.

---

# 🔄 Game Flow

```text
Start Game
     │
     ↓
Generate Food Cards
     │
     ↓
Display Hidden Cards
     │
     ↓
Select First Card
     │
     ↓
Select Second Card
     │
     ↓
Compare Food Items
   /       \
Match     No Match
  │          │
  ↓          ↓
Keep       Flip Back
Visible      │
  │          │
  └────┬─────┘
       ↓
Check All Pairs
       │
   ┌───┴───┐
   │       │
  No      Yes
   │       │
   ↓       ↓
Continue  Game Won
```

---

# 📱 Responsive Design

The game interface is designed to provide a consistent gaming experience across different screen sizes.

The layout adapts to:

* Desktop screens
* Laptop screens
* Tablets
* Mobile devices

Responsive styling helps ensure that the food cards remain accessible and easy to interact with on different devices.

---

# 🚀 Getting Started

## Prerequisites

Make sure you have **Node.js** and **npm** installed.

Check your installation:

```bash
node -v
npm -v
```

## Installation

Clone the repository:

```bash
git clone https://github.com/divyasharma-21/Memory-Card-Game.git
```

Move into the project directory:

```bash
cd Memory-Card-Game
```

Install the required dependencies:

```bash
npm install
```

## Run the Project

Start the development server:

```bash
npm run dev
```

Open the local development URL shown in the terminal, usually:

```text
http://localhost:5173/
```

---

# 🔮 Future Improvements

Possible future improvements include:

* 🏆 Score and high-score system
* ⏱️ Timer
* 🎯 Attempt/move counter
* 🎚️ Multiple difficulty levels
* 🔊 Sound effects
* ✨ Advanced card-flip animations
* 🏅 Leaderboard
* 🌙 Theme customization
* 🍔 More food categories
* 📱 Further mobile optimization

---

# 📜 License

This project is licensed under the MIT License. Feel free to use, modify, and distribute this project with proper attribution.

---

# 👩‍💻 Author

**Divya Sharma**

GitHub: https://github.com/divyasharma-21

---

# ⭐ Support

If you liked this project:

* Star ⭐ the repository
* Fork 🍴 the project
* Share 🚀 with others
* Explore the code and build your own version
