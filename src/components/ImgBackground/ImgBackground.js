import styled from "styled-components";
import banner from "../../assets/png/main_bg.png";


export const ImgWrapp = styled.div`
  width: 100%;
  // width: 280px;
  // height: 50px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 80% 20%;
  background: url(${banner});

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    align-items: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: 80% 20%;
    background: url(${banner});
  }
`;
