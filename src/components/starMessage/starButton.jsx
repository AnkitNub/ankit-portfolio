import React, { useState } from 'react';
import { Button } from '@mui/material';
import { styled } from 'styled-components';
// import CircularProgress from '@mui/material/CircularProgress';
import Cookies from 'js-cookie';
import { motion } from 'framer-motion';

const StyledButton = styled(Button)`
  && {
    padding: 10px 13px;
    background: linear-gradient(45deg, #02022b 35%, #353548 90%);
    // box-shadow: 0px 0px 6px 2px rgb(255 255 255 / 29%),
    // 	0px 0px 6px 2px rgb(57 6 64 / 47%);
    transition: all 0.2s linear;
    width: fit-content;
    display: flex;
    gap: 0.8rem;
    border-radius: 10px 0 0 10px;
  }

  // &&:hover {
  // background: rgb(36 36 62 / 81%);
  // box-shadow: 0px 0px 6px 2px rgb(255 255 255 / 35%),
  // 	0px 0px 6px 2px rgb(57 6 64 / 55%);
  // }
`;

const StyledLink = styled.a`
  position: fixed;
  top: 15%;
  right: 0;
  z-index: 9;
  overflow: hidden;
  width: 40px;
  transition: all 0.2s linear;
`;
const StarButton = () => {
  // const [starred, setStarred] = useState(false);
  // const [loading, setLoading] = useState(false);

  Cookies.remove('starred');
  // const handleClick = () => {
  // 	const url = `https://api.github.com/user/starred/HossamMahmoudKhedr/hossam_mahmoud_portfolio`;

  // 	const headers = {
  // 		Authorization: `token ${process.env.REACT_APP_SECRET}`,
  // 		'Content-Length': '0',
  // 	};

  // 	if (!starred) {
  // 		fetch(url, {
  // 			method: 'PUT',
  // 			headers: headers,
  // 		})
  // 			.then((response) => {
  // 				if (response.status === 204) {
  // 					setStarred(true);
  // 					setLoading(true);
  // 					setTimeout(() => {
  // 						setLoading(false);
  // 					}, 2000);
  // 				} else {
  // 					setStarred(true);
  // 				}
  // 				Cookies.set('starred', true, { expires: 365 * 10 });
  // 			})
  // 			.catch((error) => {
  // 				console.error('Error starring repository:', error);
  // 			});
  // 	}
  // };

  // const handleClick = () => {
  // 	Cookies.set('starred', true, { expires: 365 * 10 });
  // };
  return (
    <StyledLink
      as={motion.a}
      initial={{ width: '0px' }}
      animate={{ width: '40px' }}
      transition={{ duration: 0.2 }}
      whileHover={{ width: '95px' }}
      href="https://github.com/AnkitNub/ankit-portfolio"
      target="_blank"
      re="noreferrer"
    >
      <StyledButton
        // onClick={handleClick}
        variant="contained"
      >
        <span>⭐</span> <p> Star</p>
        {/* {!starred && '⭐ Star'} */}
        {/* {loading && (
					<CircularProgress
						color="secondary"
						size="25px"
					/>
				)} */}
        {/* {!loading && starred && 'Thanks for your support 😄'} */}
      </StyledButton>
    </StyledLink>
  );
};

export default StarButton;
