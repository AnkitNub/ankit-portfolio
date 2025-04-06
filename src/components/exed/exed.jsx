import { Box, Stack, Typography, Card, CardContent } from '@mui/material';
import React, { useState } from 'react';
import Heading from '../../utils/heading';
import { exData } from '../../data/experienceData';
import { styled } from 'styled-components';

const StyledCard = styled(Card)`
  && {
    margin: 1rem 0;
    background-color: var(--second-black-background);
    color: var(--white-text);
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
      transform: scale(1.02);
      box-shadow: 0px 0px 15px 5px var(--purple-hover); /* Purple glowing effect */
    }
  }
`;

const StyledCardContent = styled(CardContent)`
  && {
    padding: 1.5rem;
  }
`;

const Exed = () => {
  const [data] = useState(exData);

  return (
    <Box className="exed container black-container">
      <Heading headerText="Experience" id="exed" />
      <Stack spacing={3}>
        {data.map((item) => (
          <StyledCard key={item.id}>
            <StyledCardContent>
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ fontSize: { xs: '1.5rem', lg: '1.8rem' } }} // Adjusted font size
              >
                {item.name}
              </Typography>
              <Typography
                variant="subtitle1"
                color="var(--gray-text)"
                sx={{ fontSize: { xs: '1rem', lg: '1.2rem' } }} // Adjusted font size
              >
                {item.type} | {item.about.date}
              </Typography>
              <Typography
                variant="body2"
                marginTop="1rem"
                sx={{ fontSize: { xs: '0.9rem', lg: '1rem' } }} // Adjusted font size
              >
                {item.about.info}
              </Typography>
              <Typography
                variant="h6"
                marginTop="1rem"
                sx={{ fontSize: { xs: '1.2rem', lg: '1.5rem' } }} // Adjusted font size
              >
                {item.about.subTitle}
              </Typography>
              <ul>
                {item.about.list.map((point, index) => (
                  <li key={index}>
                    <Typography
                      variant="body2"
                      color="var(--gray-text)"
                      sx={{ fontSize: { xs: '0.9rem', lg: '1rem' } }} // Adjusted font size
                    >
                      {point}
                    </Typography>
                  </li>
                ))}
              </ul>
            </StyledCardContent>
          </StyledCard>
        ))}
      </Stack>
    </Box>
  );
};

export default Exed;
