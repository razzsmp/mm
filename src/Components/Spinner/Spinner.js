import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
    from {transform: rotate(0deg)}
    to {transform: rotate(360deg)}
`;

const Spinner = styled.div`
  background-color: #414449;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default () => (
  <Wrapper>
  </Wrapper>
);
