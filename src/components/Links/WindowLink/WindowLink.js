import React from "react";
import WindowLinkWrapper from "./WindowLink-style";

const WindowLink = ({ name, path }) => {
  return (
    <WindowLinkWrapper to={path}>
      <span>{name}</span>
    </WindowLinkWrapper>
  );
};

export default WindowLink;
