import styled from 'styled-components';

export const Switcher = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: absolute; */

  /* top: 10%; */
`;

export const Checkbox = styled.input`
  opacity: 0;

  &:checked + label > span {
    transform: translateX(28px);
  }
`;

export const FlagSvg = styled.svg``;

export const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 5px;
  gap: 10px;
  height: 28px;
  /* width: 52px; */
  background-color: ${(p) => p.theme.colors.PrimaryGray};
  border-radius: 50px;
  border: 2px solid ${(props) => props.theme.colors.btnsBorder};
  cursor: pointer;

  & svg {
    width: 16px;
    height: 16px;
    fill: ${(p) => p.theme.colors.PrimaryBlack};
  }

  & svg:first-of-type {
    margin-left: 3px;
  }

  & svg:last-of-type {
    margin-right: 3px;
  }
`;

export const Ball = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: ${(p) => p.theme.colors.PrimaryOrange};
  border-radius: 50%;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
