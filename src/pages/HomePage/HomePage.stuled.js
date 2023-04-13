import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  overflow: hidden;
  padding: 86px 20px 105px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 10px 20px 70px 20px;
  }

  @media screen and (min-width: 1280px) {
    padding: 40px 40px 125px 40px;
  }
`;


