import React from "react";
import styled from "styled-components";

const Message = styled.div`
  height: 30px;
  width: 100%;
  color: #fafafa;
  background-color: #225ea8;
`;

export default ({ text }) => <Message>{text}</Message>;
