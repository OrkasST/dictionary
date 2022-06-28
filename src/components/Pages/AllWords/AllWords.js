import React from "react";
import AllWordsWrapper from "./AllWords-style";
import WordsTopic from "./WordsTopic/WordsTopic";
import { NavLink } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";

const dictionary = [
  {
    name: "Food",
    words: [
      { name: "Apple", transcription: "[]", translation: "Яблоко" },
      { name: "Banana", transcription: "[]", translation: "Банан" },
      { name: "Watermelon", transcription: "[]", translation: "Арбуз" },
    ],
  },
  {
    name: "Food",
    words: [
      { name: "Apple", transcription: "[]", translation: "Яблоко" },
      { name: "Banana", transcription: "[]", translation: "Банан" },
      { name: "Watermelon", transcription: "[]", translation: "Арбуз" },
    ],
  },
];

const AllWords = () => {
  let topics = dictionary.map((topic, i) => (
    <WordsTopic name={topic.name} wordsList={topic.words} key={i} />
  ));
  return (
    <AllWordsWrapper>
      <header>
        <NavLink to="/">
          <h1>
            DICTIONARY <span className="_author">by Orkas</span>
          </h1>
        </NavLink>
      </header>
      <main>{topics}</main>
    </AllWordsWrapper>
  );
};

export default AllWords;
