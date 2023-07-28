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
    <div className="container">
      <h1 className="bg-background text-foreground font-mono">Count Words</h1>
      <textarea
        id="input"
        className="bg-accent border border-primary border-rounded-fill text-base rounded w-full h-40 p-4 mb-4 resize-y"
        placeholder="Enter text"
        rows={10}
        cols={70}
        onChange={handleInputChange}
        autoFocus
      ></textarea>
      <div>
        <button
          className="rounded-lg border-0 bg-foreground text-background  p-3"
          onClick={handleCount}
        >
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
