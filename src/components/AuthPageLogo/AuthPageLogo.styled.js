import styled from "styled-components";

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 183px;
  margin-bottom: 50px;
  align-self: flex-start;

  & p {
    font-size: 13px;
    line-height: 15px;
    letter-spacing: 0.15em;
    line-height: 1.16px;
    text-align: start;
    display: inline-block;
    margin-left: 15%;
    margin-top: 2%;
    font-weight: 700;
    text-transform: uppercase;
    color: ${(p) => p.theme.colors.logoGrey};
  }

  @media screen and (min-width: 768px) {
    width: 306px;
    margin-bottom: 79px;

    & p {
      font-size: 16px;
      letter-spacing: 0.18em;
      margin-left: 18%;
    }
  }

  @media screen and (min-width: 1280px) {
    width: 377px;
    margin-bottom: 0;
    margin-bottom: 222px;
    align-self: flex-end;
  }
`;

export const LogoSvg = styled.svg`
  fill: ${(props) => props.theme.colors.PrimaryBlack};
  width: 183px;
  height: 46px;

  @media screen and (min-width: 768px) {
    width: 306px;
    height: 78px;
  }

  @media screen and (min-width: 1280px) {
    width: 377px;
    height: 120px;
  }
`;
export const MainTitleWrapper = styled.h1`
color: blue;
  font-size: 93px;
  width: 383px;
  height: 46px;

  // @media screen and (min-width: 768px) {
  //   width: 306px;
  //   height: 78px;
  // }

  // @media screen and (min-width: 1280px) {
  //   width: 377px;
  //   height: 120px;
  // }
`;

