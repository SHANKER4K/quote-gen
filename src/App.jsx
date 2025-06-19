import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);
  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    setIndex(Math.floor(Math.random() * quotes.length));
    let hexColor = randomNumber.toString(16);
    document.querySelector(".container").style.backgroundColor = "#" + hexColor;
  };
  const quotes = [
    "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Let us pick up our books and our pens, they are the most powerful weapons. - Malala Yousafzai",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "It always seems impossible until it’s done. - Nelson Mandela",
    "I am not afraid... I was born to do this. - Joan of Arc",
    "Believe you can and you’re halfway there. - Theodore Roosevelt",
  ];
  return (
    <>
      <div className="container">
        <div className="quote">
          <h1>Random Quote Generator</h1>
        </div>
        <br />
        <div className="quote">{quotes[index]}</div>
        <br />
        <button onClick={handleClick}>Generate Random Quote</button>
      </div>
    </>
  );
}

export default App;
