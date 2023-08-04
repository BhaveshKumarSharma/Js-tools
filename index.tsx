"use client";
import React, { useState } from "react";

export const WordCounter = () => {
  const [wordCount, setWordCount] = useState(0);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const handleCount = () => {
    const words = inputText
      .trim()
      .split(/\s+/)
      .filter((word) => word !== "");

    setWordCount(words.length);
  };

  return (
    <div className="container mb-3 ">
      <h1 className="bg-background text-foreground font-mono">Count Words</h1>
      <div className="form-control">
        <label>Enter text Here:</label>
        <textarea
          id="input"
          className="textarea-y bg-accent"
          placeholder="Enter text"
          rows={10}
          cols={70}
          onChange={handleInputChange}
          autoFocus
        ></textarea>
      </div>
      <div className="my-3">
        <button className="button-primary button-sm " onClick={handleCount}>
          Count Words
        </button>
      </div>
      <div className="font-bold font-sans text-xl mt-3">
        Total number of Words: <span>{wordCount}</span>
      </div>
    </div>
  );
};

// export default WordCounter;
