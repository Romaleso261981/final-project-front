import styled from "styled-components";
import banner from "../../assets/png/main_bg.png";


export const ImgWrapp = styled.div`
  width: 100%;
  // width: 280px;
  // height: 50px;
  background-size: contain;
  background: url(${banner});

  @media screen and (min-width: 1280px) {
    // flex-direction: row;
    // align-items: center;
    // gap: 157px;
  }
`;
