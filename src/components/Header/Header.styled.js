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
