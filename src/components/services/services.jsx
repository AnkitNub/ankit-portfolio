import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Heading from '../../utils/heading';
import { data } from '../../data/servicesData';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

const StyledStack = styled(Stack)`
  && {
    padding: 4rem 5rem;
    align-items: center;
    text-align: center;
    gap: 2rem;
    background-color: var(--second-black-background);
    color: var(--white-text);
    border-radius: 15px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.02);
      box-shadow: 0px 0px 15px 5px var(--purple-hover);
    }
  }

  @media (max-width: 768px) {
    && {
      padding: 2rem 1rem;
      gap: 1.3rem;
    }
  }

  /* Add icon animation */
  svg {
    transition: all 0.3s ease-in-out;
    fill: var(--secondary-color);
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

const Services = () => {
  return (
    <Box className="about container second-black-container">
      <Heading id="services" headerText="Services" />
      <Stack
        sx={{
          flexDirection: { sm: 'column', lg: 'row' },
          overflow: 'hidden',
          padding: '25px',
        }}
        justifyContent="space-between"
        gap={10}
      >
        {data.map((el) => {
          let transform =
            el.name === 'Web Design' ? 'translateX(-60%)' : 'translateX(60%)';
          return (
            <StyledStack
              as={motion.div}
              initial={{
                transform: transform,
                opacity: 0,
              }}
              whileInView={{ transform: 'translateX(0%)', opacity: 1 }}
              transition={{
                delay: 0.7,
                duration: 0.8,
              }}
              viewport={{ once: true }}
              key={el.id}
            >
              {el.icon}
              <Typography
                variant="h4"
                color="var(--white-text)"
                fontSize="1.8rem"
                marginBottom="0.5rem"
              >
                {el.name}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'var(--white-text)',
                  letterSpacing: '2px',
                  lineHeight: { xs: '1.7', sm: '1.8', lg: '2' },
                  maxWidth: '400px',
                  margin: '0 auto',
                  overflow: 'hidden',
                }}
              >
                {el.explain}
              </Typography>
            </StyledStack>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Services;
