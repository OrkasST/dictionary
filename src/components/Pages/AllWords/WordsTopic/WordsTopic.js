import React from "react";
import Word from "./Word/Word";
import WordsTopicWrapper from "./WordsTopic-style";

const WordsTopic = ({ name, wordsList }) => {
  let words = wordsList.map((word) => (
    <Word
      name={word.name}
      transcription={word.transcription}
      translation={word.translation}
      key={word.name}
    />
  ));

  const buttonClickHandler = (e) => {
    e.target.classList.toggle("activated");
    e.target.parentElement.parentElement.parentElement.classList.toggle(
      "_scrolled_down"
    );
  };

  return (
    <WordsTopicWrapper>
      <div className="top">
        <span className="title">{name}</span>
        <div className="buttons">
          <button className="new_word_adding_button">
            <div className="ch1" />
            <div className="ch2" />
          </button>
          <button className="scroller" onClick={buttonClickHandler}></button>
        </div>
      </div>
      <div>{words}</div>
    </WordsTopicWrapper>
  );
};

export default WordsTopic;
