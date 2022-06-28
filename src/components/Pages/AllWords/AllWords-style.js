import styled from "styled-components";

const AllWordsWrapper = styled.div`
  @keyframes goUp {
    0% {
      left: 50%;
      transform: translate(-50%);
      margin-top: 3vw;
      height: 6.8vw;
      padding-left: 0;
      text-align: center;
    }
    50% {
      text-align: center;
    }
    100% {
      padding-left: 3vw;
      left: 0;
      transform: translate(0);
      margin-top: 1vw;
      height: 3vw;
      text-align: left;
    }
  }
  @keyframes disappear {
    0% {
      opacity: 1;
    }
    70% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  h1 {
    position: relative;
    /* left: 50%;
    transform: translate(-50%); */
    width: 20vw;
    /* margin-top: 3vw; */

    font-size: 2.8vw;

    border-bottom: 1px #2a2422 solid;

    animation: goUp 0.6s linear;
    animation-fill-mode: forwards;
  }
  a {
    text-decoration: none;
    color: #2a2422;
  }
  ._author {
    font-size: 1.6vw;
    color: #544844;

    animation: disappear 0.6s linear;
    animation-fill-mode: forwards;
  }
`;

export default AllWordsWrapper;
