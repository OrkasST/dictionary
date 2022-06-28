import React from "react";
import WordWrapper from "./Word-style";

const Word = ({ name, transcription, translation }) => {
  return (
    <WordWrapper>
      <span>{name}</span>
      <span>{transcription}</span>
      <span>{translation}</span>
    </WordWrapper>
  );
};

export default Word;
