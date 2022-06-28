import styled from "styled-components";

const WordWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  background: grey;

  font-family: "Times New Roman", Times, serif;

  span {
    width: 30%;
    text-align: center;
  }
`;

export default WordWrapper;
