import * as React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  paddig: 1rem auto;
  margin: 1rem auto;
  overflow: hidden;
  position: static;
`;
const Nav = styled.div`
  margin-right: 10rem;
  margin-left: 10rem auto;
  padding: 10rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: row;
  font-size: 2 rem;

  float: right;
`;

const Menu = styled.div`
  margin-top: 10rem;
  margin-right: 10rem;
  padding-right: 10rem;
  padding: 2rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  float: right;
`;

// font-family: "Luckiest Guy", cursive;
// font-family: "Noto Sans KR", sans-serif;
// font-family: "Titan One", cursive;
// font-family: "Yeseva One", cursive;

const StyledName = styled.h1`
  font-family: "Nunito Sans";
  text-align: right;
  margin-left: 1rem;
  margin-right: 1rem auto;
  padding-left: 2rem auto;
  float: right;
  font-size: 1.2rem;
`;

const StyledMenuName = styled.h1`
  font-family: "Nunito Sans";
`;

const Air = styled.div`
  margin-top: 100px;
`;

const Navbar = () => {
  return (
    <Wrapper>
      <Nav>
        <StyledName>Dark mode</StyledName>
        <StyledName> Korean</StyledName>
      </Nav>
      <Air />
      <Menu>
        <StyledMenuName>About</StyledMenuName>
        <StyledMenuName>Projects</StyledMenuName>
        <StyledMenuName>Contact</StyledMenuName>
        <StyledMenuName>Blog</StyledMenuName>
      </Menu>
    </Wrapper>
  );
};
export default Navbar;
