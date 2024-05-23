import React from "react";
import { StyledBox } from "../styles/StyledBox";

function Box({ active, onClick }) {
  return (
    <StyledBox $active={active} onClick={onClick}>
      Box
    </StyledBox>
  );
}

export default Box;
