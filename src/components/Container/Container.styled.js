import styled from "styled-components";

export const ContainerWrapper = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 320px;
  @media screen and (max-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media screen and (max-width: 1280px) {
    max-width: 1280px;
    padding: 0 16px;
  }
`;