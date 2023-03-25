import { useState } from "react";
import "./styles.css";

const emojiData = {
  "🚀": "Rocket",
  "🛬": "Airplane Arrival",
  "🚁": "Helicopter",
  "🪂": "Parachute",
  "🪐": "Ringed Planet",
  "🌌": "Milky Way",
  "🌠": "Shooting Star"
};

const emojiArray = Object.keys(emojiData);

export default function App() {
  const [showEmoji, setShowEmoji] = useState("");
  const [meaning, setMeaning] = useState("");

  function inputHandler(e) {
    var userInput = e.target.value;

    setShowEmoji(userInput);

    var meaning = emojiData[userInput];

    if (meaning === undefined) {
      meaning = "failure to recognise this emoji";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiData[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>EmojiDecode</h1>
      <input onChange={inputHandler} placeholder="Search Your Emoji" />
      <h2>{showEmoji}</h2>
      <h2>{meaning}</h2>

      <ul>
        {emojiArray.map((item) => {
          return (
            <li
              onClick={() => emojiClickHandler(item)}
              className="list-item"
              key={item}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
