import styled from "styled-components";

const HomeWrapper = styled.div`
  h1 {
    position: relative;
    left: 50%;
    transform: translate(-50%);
    width: 20vw;
    margin-top: 3vw;

    font-size: 2.8vw;
    text-align: center;

    border-bottom: 1px #2a2422 solid;
  }
  ._author {
    font-size: 1.6vw;
    color: #544844;
  }
  .links {
    margin-top: 2vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export default HomeWrapper;
