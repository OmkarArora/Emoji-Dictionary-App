import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning face with big eyes",
  "😪": "Sleepy Face",
  "🥵": "Hot Face",
  "🤣": "Rolling on the Floor Laughing",
  "🏁": "Chequered Flag",
  "🚩": "Triangular Flag",
  "🎌": "Crossed Flags",
  "🏴": "Black Flag",
  "🏳️": "White Flag",
  "🌈": "Rainbow Flag",
  "🏳️‍⚧": "Transgender Flag",
  "🏴‍☠️": "Pirate Flag"
};

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    const userInput = event.target.value;

    // Method 1
    // let meaning = emojiDictionary[userInput];
    // if (meaning === undefined) meaning = "Meaning not found";
    // setMeaning(meaning);

    // Method 2
    if (userInput in emojiDictionary) setMeaning(emojiDictionary[userInput]);
    else setMeaning("Definition not found");
  }

  function onEmojiClick(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <img
        className="header-image"
        src="https://inside.akronchildrens.org/wp-content/uploads/2015/06/inside_out_-_emotion_poster.jpg"
        alt="inside out poster"
      />

      <h1>Inside Out</h1>
      <input onChange={emojiInputHandler}></input>
      <div className="meaning">{meaning}</div>
      <h2>Emojis we know</h2>
      {Object.keys(emojiDictionary).map((item) => (
        <span
          onClick={() => onEmojiClick(item)}
          key={item}
          className="emoji-small"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
