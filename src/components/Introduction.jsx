import * as React from "react";
import styled from "@emotion/styled";

const StyledName = styled.h1`
  font-size: 1.2rem;
  float: left;
`;

const Wrapper = styled.div`
  margin-left: 15rem;
  padding: ; 5rem ;
`;

const Introduction = () => {
  return (
    <>
      <Wrapper>
        <StyledName>안녕하세요</StyledName>
      </Wrapper>
    </>
  );
};
export default Introduction;
