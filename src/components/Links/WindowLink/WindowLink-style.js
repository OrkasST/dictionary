import styled from "styled-components";
import { NavLink } from "react-router-dom";

const WindowLinkWrapper = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 10vw;
  height: 10vw;
  margin: 1vw;

  border: 1px solid #2a2422;
  border-radius: 1rem;

  text-decoration: none;
  font-size: 1.5vw;
  color: #2a2422;

  transition: 0.3s;

  &:hover {
    background-color: #2a2422;
    color: rgb(203, 243, 255);
    box-shadow: 0 0 2vw 1.2vw rgba(45, 45, 45, 0.5),
      0 0 1vw 0.3vw rgba(45, 45, 45, 0.6);
    transform: scale(1.08);
  }
`;

export default WindowLinkWrapper;
