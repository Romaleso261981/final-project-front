import styled, { keyframes } from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  height: 56px;
  padding: 0 10px;
  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 32px;
  }
`;

export const ControlsWrapper = styled.div`
  display: flex;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const LogoContainer = styled.div`
  position: relative;

  width: 90px;
  height: 31px;
`;

const LogoAnimation = keyframes`
    0% {transform: scale(1)}
  50% {transform: scale(1.2)}
   100% {transform: scale(1)}
`;

export const Block = styled.div`
  position: absolute;
  top: 5px;
  left: 6px;
  width: 33px;
  height: 26px;
  border-radius: 8px;
  background-color: ${(p) => p.theme.colors.PrimaryOrange};
  box-shadow: -6px -5px rgba(251, 124, 47, 0.2);
  animation: ${LogoAnimation} 3500ms ease-in-out infinite;
`;

export const LogoSvg = styled.svg`
  position: absolute;
  top: 11px;
  left: 20px;
  height: 16.71px;
  width: 70px;
  fill: ${(p) => p.theme.colors.TextGray};
  transition: fill 350ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Img = styled.div`
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.colors.PrimaryGray};
  border-radius: 50%;
  margin-right: 16px;
  border: 2px solid ${(props) => props.theme.colors.btnsBorder};
`;

export const Avatar = styled.p`
  // color: ${(p) => p.theme.colors.logoGrey};
  // font-size: 12px;
  // font-weight: bold;
`;

export const Name = styled.p`
  // color: ${(p) => p.theme.colors.TextGray};
  // font-size: 12px;
  // line-height: 1.167;
  // letter-spacing: 0.04em;

  // @media screen and (max-width: 480px) {
  //   display: none;
  // }
`;

export const Line = styled.div`
  // height: 36px;
  // width: 1px;

  // background-color: #e0e5eb;

  // margin: 0 20px;

  // @media screen and (max-width: 480px) {
  //   display: none;
  // }
`;

export const Exit = styled.button`
  // display: flex;
  // align-items: center;
  // text-decoration: none;
  // font-weight: 700;
  // color: ${(p) => p.theme.colors.TextGray};
  // background-color: transparent;
  // font-size: 12px;
  // line-height: 1.167;
  // letter-spacing: 0.04em;
  // padding: 0;
  // border: 0;
  // cursor: pointer;

  // &:hover,
  // &:focus {
  //   color: ${(p) => p.theme.colors.PrimaryOrange};
  // }

  // &:hover svg,
  // &:focus svg {
  //   stroke: ${(p) => p.theme.colors.PrimaryOrange};
  //   fill: ${(p) => p.theme.colors.PrimaryOrange};
  // }
`;

export const ExitText = styled.p`
  // text-decoration: underline;

  // margin: 8px 0;

  // @media screen and (max-width: 480px) {
  //   display: none;
  // }
`;
export const RegisterText = styled.p`
  // text-decoration: underline;

  // margin: 8px 0;

  // @media screen and (max-width: 480px) {
  //   display: none;
  // }
`;

export const ExitSvg = styled.svg`
  // display: none;
  // width: 16px;
  // height: 16px;

  // @media screen and (max-width: 480px) {
  //   display: block;
  // }
`;
