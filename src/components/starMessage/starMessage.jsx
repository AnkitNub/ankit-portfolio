import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Cookies from 'js-cookie';
import { ReactComponent as Quit } from '../../assets/icons/x-lg.svg';
import StarButton from './starButton';

const StyledMessage = styled(Box)`
  display: ${(props) => (props.active ? 'block' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 9;
  transform: translate(-50%, -50%);
  min-width: 300px;
  max-width: 410px;
  background: linear-gradient(45deg, #02022b 35%, #353548 90%);
  color: white;
  text-align: center;
  padding: 3rem 2rem;
  border-radius: 1rem;
  transition: all 0.4 linear;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    background: rgba(0, 0, 0, 0.3);
    width: 99.3vw;
    height: 100vh;
  }
`;

const StyledSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 12px;
  right: 20px;
  box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 30%);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
const StarMessage = ({ active }) => {
  const [acitve, setActive] = useState(false);

  useEffect(() => {
    // let cookieValue = JSON.parse(Cookies.get('starred'));

    if (Cookies.get('starred') == undefined) {
      setTimeout(() => {
        setActive(true);
      }, 15000);
    }
  }, []);
  const handleClick = () => {
    setActive(false);
  };

  const close = () => {
    Cookies.set('starred', true, { expires: 365 * 10 });
    setActive(false);
  };
  return (
    <StyledMessage className="star" active={acitve}>
      <StyledSpan onClick={handleClick}>
        <Quit />
      </StyledSpan>
      <Stack spacing={3} alignItems="center" gap="1rem">
        <Typography variant="body1">
          If you liked my portfolio, Give me a star to my repository
        </Typography>
        <a
          href="https://github.com/AnkitNub/ankit-portfolio"
          target="_blank"
          re="noreferrer"
          onClick={close}
        >
          <StarButton />
        </a>
      </Stack>
    </StyledMessage>
  );
};

export default StarMessage;
