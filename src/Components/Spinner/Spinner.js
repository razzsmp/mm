import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

function Spinner(props) {
  return (
    <Container>
      <Image src={require("./logo512.png")}></Image>
      <Link to="https://stats.jimhub.gq/">
        <Button>
          <ButtonOverlay></ButtonOverlay>
        </Button>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(32,31,31,1);
  border-width: 1px;
  border-color: #000000;
  flex-direction: column;
  border-style: solid;
  height: 100vh;
  width: 100vw;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Image = styled.img`
  width: 200px;
  height: 100%;
  margin-top: 299px;
  align-self: center;
  object-fit: contain;
`;

const Button = styled.div`
  width: 80px;
  height: 48px;
  background-color: rgba(81,102,240,1);
  border-radius: 9px;
  margin-top: 74px;
  margin-left: 593px;
  border: none;
`;

export default Spinner;
