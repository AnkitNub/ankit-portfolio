import { Button } from '@mui/material';
import styled from '@emotion/styled';
import React from 'react';

const StyledButton = styled(Button)`
  position: relative;
  border: 1px solid
    ${(props) => (props.disabled ? '#b99b97' : 'var(--red-text)')};
  width: fit-content;
  border-radius: 12px;
  color: ${(props) => props.textColor};
  font-weight: 700;
  padding: 1rem 4rem;
  text-transform: none;
  font-size: 1.2rem;
  z-index: 0;
  background-color: transparent;
  transition: all 0.2s linear !important;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: ${(props) => props.beforeWidth};
    height: 100%;
    border-radius: 12px;
    z-index: -1;
    background-color: ${(props) =>
      props.disabled ? '#b99b97' : 'var(--red-text)'};

    transition: all 0.2s ease-in-out !important;
  }

  &:hover {
    color: ${(props) => props.hoverColor || '#7b6fee'}; // Default to purple
  }

  &:hover::before {
    width: 100%;
    background-color: ${(props) =>
      props.beforeBgColorHover || '#7b6fee'}; // Default to purple
  }

  @media (max-width: 576px) {
    padding: 1rem 2.5rem;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const CustomButton = ({
  content,
  textColor,
  beforeWidth,
  beforeBgColorHover,
  hoverColor,
  disabled,
}) => {
  return (
    <StyledButton
      beforeWidth={beforeWidth}
      beforeBgColorHover={beforeBgColorHover}
      hoverColor={hoverColor}
      disabled={disabled}
      sx={{ color: textColor }}
    >
      {content}
    </StyledButton>
  );
};

export default CustomButton;
