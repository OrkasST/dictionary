import styled from "styled-components";

const AppWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Rubik+Moonrocks&display=swap");

  width: 100vw;
  height: 100vh;
  background: rgb(203, 243, 255);
  background: linear-gradient(
    117deg,
    rgba(203, 243, 255, 1) 0%,
    rgba(114, 164, 127, 1) 100%
  );

  overflow: hidden;
  font-family: "Rubik Moonrocks", cursive;
  color: #2a2422;

  * {
    margin: 0;
    padding: 0;
  }
`;

export default AppWrapper;
