import styled from "styled-components";

const WordsTopicWrapper = styled.section`
  position: relative;
  width: 30vw;
  height: 3.3vw;
  margin-top: 1.2vw;
  margin-left: 1.2vw;
  border-radius: 1rem;
  border: 1px solid #2a2422;
  overflow: hidden;
  font-size: 1.1vw;
  &._scrolled_down {
    height: auto;
  }
  .top,
  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title {
    display: block;
    padding: 1vw 1vw 1vw 2vw;
    font-weight: bold;
  }
  .scroller {
    width: 0.6vw;
    height: 0.6vw;
    background: transparent;
    border: none;
    border-bottom: 3px #2a2422 solid;
    border-left: 3px #2a2422 solid;
    transform: rotate(-45deg);
    margin-right: 2vw;
    cursor: pointer;
  }
  .scroller:hover {
    transform: rotate(-45deg) scale(1.2);
  }
  .scroller.activated {
    border: none;
    border-top: 3px #2a2422 solid;
    border-right: 3px #2a2422 solid;
  }

  .new_word_adding_button {
    position: relative;
    width: 0.9vw;
    height: 0.9vw;
    border: none;
    border-radius: 2vw;
    z-index: 2;
    background: transparent;
    margin-right: 1vw;
    cursor: pointer;
  }
  .ch1,
  .ch2 {
    position: absolute;
    display: block;
    height: 3px;
    width: 0.9vw;
    cursor: pointer;
    background: #2a2422;
  }
  .ch1 {
    top: 50%;
    transform: translate(0, -50%);
  }
  .ch1 {
    left: 50%;
    transform: translate(-50%) rotate(90deg);
  }

  .new_word_adding_button:hover {
    transform: scale(1.2);
  }
`;

export default WordsTopicWrapper;
