import styled from 'styled-components';

export const FormWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.colors.PrimaryWhite};
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 30px;
  padding: 40px 20px;
  gap: 32px;
  @media screen and (min-width: 320px) {
    width: 280px;
  }
  @media screen and (min-width: 768px) {
    width: 426px;
    border: 1px solid black;
    padding: 56px 84px;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  }
`;

export const Hint = styled.p`
  max-width: 80%;
  display: block;
  height: auto;
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.TextGray};
`;

export const HintLeft = styled.p`
  display: block;
  height: auto;
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.TextGray};
  text-align: start;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InputsWrapper = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  gap: 20px;
`;

export const BtnsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  @media screen and (min-width: 768px) {
    gap: 15px;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  padding: 17px 18px;
  width: 100%;
  font-size: 14px;
  font-family: "Roboto";
  background-color: ${(p) => p.theme.colors.SecondGray};
  border-radius: 30px;
  border: 1px solid black;
  color: ${(p) => p.theme.colors.authFormInputText};
  margin-bottom: 4px;
  &::placeholder {
    color: ${(p) => p.theme.colors.placeholderGrey};
  }
  &:focus {
    color: ${(p) => p.theme.colors.authFormInputText};
    outline: 1px solid ${(p) => p.theme.colors.PrimaryOrange};
    -moz-outline-radius: 30px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: flex-start;
`;

export const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 400;
  font-size: 10px;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.PrimaryBlack};
  margin-bottom: 12px;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

export const ErrorText = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 1.16;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.inputErrorRed};
`;

export const GoogleLoginLink = styled.a`
  box-sizing: border-box;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 116px;
  min-height: 44px;
  font-family: inherit;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  transition: 350ms ease-in-out;
  color: ${p => p.theme.colors.PrimaryBlack};
  background-color: ${p => p.theme.colors.PrimaryGray};
  padding: 10px 16px;
  border-radius: 26px;
  border: 2px solid ${props => props.theme.colors.btnsBorder};
  filter: drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15));
  cursor: pointer;
  &:hover,
  &:focus {
    color: white;
    background-color: ${p => p.theme.colors.PrimaryOrange};
    filter: drop-shadow(1px 3px 5px rgba(255, 107, 8, 0.35));
  }
  &:active {
    background-color: ${p => p.theme.colors.PrimaryOrange};
    color: white;
    filter: drop-shadow(1px 3px 5px rgba(255, 107, 8, 0.35));
  }
  & > svg {
    margin-right: 10px;
    width: 18px;
    height: 18px;
  }
  @media screen and (min-width: 768px) {
    min-width: 122px;
  }
`;

export const PasswordBtn = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(-20px, 40px);
  border: none;
  background-color: transparent;
`;
export const PasswordIcon = styled.img`
  width: 16px;
  height: 16px;
  z-index: 1000;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;