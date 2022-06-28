import React from "react";
import WindowLink from "../../Links/WindowLink/WindowLink";
import HomeWrapper from "./Home-style";

const Home = (props) => (
  <HomeWrapper>
    <header>
      <h1>
        DICTIONARY <span className="_author">by Orkas</span>
      </h1>
    </header>
    <main>
      <section className="links">
        <WindowLink name="All words" path="/all-words" />
        <WindowLink name="Cards" path="/cards" />
      </section>
    </main>
  </HomeWrapper>
);

export default Home;
