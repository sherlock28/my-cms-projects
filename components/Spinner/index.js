import React from "react";
import styled from "styled-components";

const StyledLoading = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 50%;
  border-left-color: #09f;

  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Spinner({ height, width }) {
  return <StyledLoading height={height} width={width} />;
}
