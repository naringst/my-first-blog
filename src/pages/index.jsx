import * as React from "react";
import Introduction from "../components/Introduction";
import Navbar from "../components/Navbar";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  display: flex;
`;
const IndexPage = () => {
  return (
    <>
      <StyledDiv>
        <Navbar />
        <Introduction />
      </StyledDiv>
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <head>
    <title>Home Page</title>
  </head>
);
