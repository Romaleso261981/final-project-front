import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled(Link)`
  min-width: 116px;
  min-height: 44px;
  border: 1px solid blue;
  margin-right: 5px;
  padding: "12px 14px";
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
`;
export const LogoPetly = styled.span`
  position: absolute;
  left: 24.68%;
  right: 68.83%;
  top: 20.83%;
  bottom: 22.92%;

  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
`;
