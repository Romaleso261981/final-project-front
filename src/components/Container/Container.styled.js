import styled from "styled-components";

export const ContainerWrapp = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  @media screen and (min-width: 320px) {
    max-width: 320px;
  }
  @media screen and (min-width: 768px) {
    min-width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1024px) {
    min-width: 1024px;
    padding: 0 16px;
  }
`;
