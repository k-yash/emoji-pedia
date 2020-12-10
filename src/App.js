import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "😜": "Crazy",
  "🤩": "Star-Struck",
  "🤗": "Hugging"
};

var emojisWeKnow = Object.keys(emojiDictionary);
// console.log(emojisWeKnow)

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    //  console.log(meaning);
    setMeaning(meaning);
  }

  function emojiInPlace(item) {
    var meaning = emojiDictionary[item];
    setMeaning(meaning);

    //  return <h2>{emojiDictionary[item]}</h2>
    // console.log("clicked", emojiDictionary[item])
  }

  return (
    <div className="App">
      <h1>Emoji Pedia!!</h1>
      <input onChange={emojiInputHandler} />
      <div>
        <h2>{meaning}</h2>
        <h3>Emoji's we know</h3>
        {emojisWeKnow.map((item) => (
          <span
            key={item}
            onClick={() => emojiInPlace(item)}
            style={{ padding: "0.5rem", fontSize: "2rem", cursor: "pointer" }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// https://codesandbox.io/s/neogcamp-lesson-five-qsxd4?file=/src/App.js:1201-1221
