import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Nav = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Navbar = () => {
  return (
    <div>
      <Nav>
        <div>Home</div>
        <div>
          <p>About</p>
          <p>Projects</p>
          <p>Contact</p>
          <p>Blog</p>
          <p> dark mode</p>
          <p> english</p>
        </div>
      </Nav>
    </div>
  );
};
export default Navbar;
