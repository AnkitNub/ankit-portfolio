import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import Heading from '../../utils/heading';
import { styled } from 'styled-components';
import { skills } from '../../data/skillsData';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { motion } from 'framer-motion';

const StyledConnector = styled(TimelineConnector)`
  && {
    background-color: var(--white-text);
  }
`;

const StyledContent = styled(TimelineContent)`
  && {
    color: var(--text-primary);
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 10px 15px;
    border-radius: 8px;

    &:hover {
      background: rgba(255, 255, 255, 0.05);
      color: var(--secondary-color);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      transform: scale(1.05);
    }
  }
`;

const Skills = () => {
  const [clickedElement, setClickedElement] = useState(1);
  const [chosenSkill, setChosenSkill] = useState(skills[0]);
  const handleClick = (id) => {
    setClickedElement(id);
    let skill = skills.filter((el) => (el.id === id ? el : ''));
    setChosenSkill(skill[0]);
  };
  return (
    <Box
      className="skills container black-container"
      sx={{
        paddingTop: { xs: '2rem', md: '3rem' },
        paddingBottom: { xs: '2rem', md: '3rem' },
        minHeight: '70vh',
        background: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
        borderRadius: '20px',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Heading id="skills" headerText="Skills" />
      <Stack sx={{ flexDirection: { sm: 'column', lg: 'row' } }} gap="1rem">
        <Timeline
          position="alternate"
          sx={{
            padding: { xs: '0', lg: 'initial' },
            flexDirection: { xs: 'row', lg: 'column' },
            flexWrap: { xs: 'wrap', lg: 'nowrap' },
            justifyContent: { xs: 'unset', md: 'center', lg: 'unset' },
            userSelect: 'none',
          }}
        >
          {skills.map((skill, index) => {
            return (
              <TimelineItem
                key={skill.id}
                sx={{
                  flexDirection: { xs: 'row-reverse', lg: 'row' },
                  direction: { xs: 'rtl', lg: 'ltr' },
                  width: { xs: '120px', md: 'unset' },
                  zIndex: clickedElement === skill.id ? 2 : 1,
                }}
              >
                <TimelineSeparator
                  sx={{
                    flexDirection: { xs: 'unset', lg: 'column' },
                  }}
                >
                  <TimelineDot
                    component={motion.div}
                    whileHover={{
                      scale: 1.2,
                      boxShadow: '0 0 0 8px rgba(0,255,128,0.15)',
                    }}
                    animate={
                      clickedElement === skill.id
                        ? { scale: 1.15 }
                        : { scale: 1 }
                    }
                    transition={{ type: 'spring', stiffness: 300 }}
                    onClick={() => {
                      handleClick(skill.id);
                    }}
                    sx={{
                      background:
                        clickedElement === skill.id
                          ? 'var(--active-skill-green)'
                          : 'var(--white-text)',
                      cursor: 'pointer',
                      flexDirection: { xs: 'row', lg: 'column' },
                      boxShadow:
                        clickedElement === skill.id
                          ? '0 0 0 4px rgba(0,255,128,0.25)'
                          : 'none',
                      transition: 'box-shadow 0.3s',
                    }}
                  />
                  {index === skills.length - 1 ? '' : <StyledConnector />}
                </TimelineSeparator>
                <StyledContent
                  component={motion.div}
                  whileHover={{ scale: 1.07 }}
                  animate={
                    clickedElement === skill.id ? { scale: 1.07 } : { scale: 1 }
                  }
                  transition={{ type: 'spring', stiffness: 300 }}
                  onClick={() => {
                    handleClick(skill.id);
                  }}
                  sx={{
                    fontWeight: clickedElement === skill.id ? 700 : 500,
                    letterSpacing:
                      clickedElement === skill.id ? '1.5px' : '1px',
                  }}
                >
                  {skill.name}
                </StyledContent>
              </TimelineItem>
            );
          })}
        </Timeline>
        <Stack
          component={motion.div}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          key={chosenSkill.id}
          className="glass-effect"
          sx={{
            'width': { xs: '100%', lg: '74%' },
            'padding': { xs: '2rem 1.5rem', lg: '3rem 5.5rem' },
            'background': 'rgba(49,49,49,0.95)',
            'backdropFilter': 'blur(10px)',
            'borderRadius': '15px',
            'border': '1px solid rgba(255, 255, 255, 0.1)',
            'transition': 'all 0.3s ease-in-out',
            'boxShadow': '0 8px 32px 0 rgba(31, 38, 135, 0.17)',
            '&:hover': {
              border: '1px solid var(--secondary-color)',
              transform: 'translateY(-5px) scale(1.01)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          <Stack
            justifyContent="space-between"
            alignItems="center"
            sx={{ gap: { xs: '2rem', md: '4rem', lg: '6rem' } }}
          >
            <Stack gap="0.5rem">
              <Typography
                variant="h4"
                fontWeight="700"
                sx={{
                  fontSize: { xs: '2rem', lg: '2.6rem' },
                  letterSpacing: '2px',
                  textShadow: '0 2px 8px rgba(0,0,0,0.15)',
                }}
                color="var(--white-text)"
              >
                {chosenSkill.name}
              </Typography>
              <Typography
                variant="body1"
                color="var(--white-text)"
                letterSpacing="1.3px"
                lineHeight="1.8"
                sx={{ fontSize: { xs: '1rem', lg: '1.15rem' }, opacity: 0.95 }}
              >
                {chosenSkill.info}
              </Typography>
            </Stack>
            <Box
              direction="row"
              sx={{
                transform: {
                  xs: 'scale(2.2)',
                  md: 'scale(3.2)',
                  lg: 'scale(5.2)',
                },
                opacity: '0.35',
                marginBottom: { xs: '1rem', lg: '3rem' },
                filter: 'drop-shadow(0 2px 8px rgba(0,255,128,0.15))',
                transition: 'transform 0.3s',
              }}
            >
              {chosenSkill.icon}
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Skills;
