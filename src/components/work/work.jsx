import { Box, Stack, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import Heading from '../../utils/heading';
import { projData } from '../../data/projectsData';
import CustomButton from '../../utils/customButton';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

const GitHubIcon = () => (
  <svg
    height="20"
    width="20"
    viewBox="0 0 16 16"
    version="1.1"
    fill="currentColor"
  >
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
  </svg>
);

const StyledName = styled(Typography)`
  color: var(--text-primary) !important;
  font-weight: 700 !important;
  font-family: 'Inter', sans-serif !important;
  font-size: 2.2rem !important;
  margin-bottom: 1rem !important;
`;

const StyledParagraph = styled(Typography)`
  color: var(--text-secondary) !important;
  max-width: 90%;
  font-size: 1.1rem !important;
  line-height: 1.8 !important;
  margin: 1rem 0 !important;
  @media (max-width: 768px) {
    max-width: unset;
    font-size: 1rem !important;
  }
`;

const ShowMoreButton = styled(Button)`
  && {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    text-align: center;
    color: var(--text-primary);
    background-color: var(--background-light);
    z-index: 3;
    box-shadow: 0 -3px 10px 2px rgba(79, 70, 229, 0.1);
  }

  &&:hover {
    background-color: var(--background-light);
    box-shadow: 0 -3px 10px 2px rgba(79, 70, 229, 0.2);
  }
`;

const ProjectCard = styled(Stack)`
  padding: 2.5rem;
  background: var(--card-bg);
  border-radius: 16px;
  transition: all 0.4s ease-in-out;
  border: 1px solid rgba(79, 70, 229, 0.1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--hover-shadow);
  }
`;

const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  transition: all 0.4s ease;
  transform: scale(1.05);

  &:hover {
    transform: scale(1.1);
  }
`;

const Work = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projData : projData.slice(0, 2);

  const handleClick = () => {
    setShowAll(!showAll);
  };

  return (
    <Box
      className="work container second-black-container"
      sx={{
        position: 'relative',
        transition: 'all 0.5s linear',
      }}
    >
      <Heading headerText="My Work" id="work" />
      <Box className="projects">
        {visibleProjects.map((project) => (
          <ProjectCard
            component={motion.div}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            sx={{
              flexDirection: { xs: 'column-reverse', lg: 'row' },
              marginBottom: { xs: '3rem', lg: '4rem' },
            }}
            alignItems="center"
            justifyContent="space-between"
            key={project.id}
          >
            <Stack
              sx={{
                width: { xs: '100%', lg: '50%' },
                alignItems: { xs: 'center', lg: 'unset' },
                textAlign: { xs: 'center', lg: 'unset' },
                position: 'relative',
                zIndex: 1,
              }}
            >
              <StyledName variant="h4">{project.name}</StyledName>
              <StyledParagraph variant="body1">
                {project.describtion}
              </StyledParagraph>
              <Stack
                direction="row"
                height="50px"
                alignItems="center"
                gap={2}
                margin="0.5rem 0 0.7rem"
              >
                {project.languages.map((lang) => lang)}
              </Stack>
              <Stack
                sx={{
                  flexDirection: { xs: 'column-reverse', lg: 'row' },
                  rowGap: { xs: '1rem', lg: 'unset' },
                  columnGap: { xs: 'unset', lg: '1rem' },
                }}
                spacing={3}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: { xs: '100%', lg: 'fit-content' },
                    pointerEvents: project.done ? '' : 'none',
                  }}
                >
                  <CustomButton
                    content="Go live"
                    beforeWidth="100%"
                    textColor="black"
                    hoverColor="var(--white-text)"
                    beforeBgColorHover="transparent"
                    disabled={!project.done}
                  />
                </a>
                <a
                  href={project.gitLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: { xs: '100%', lg: 'fit-content' },
                    marginTop: '0px',
                    pointerEvents: project.gitLink === '#' ? 'none' : '',
                  }}
                >
                  <CustomButton
                    content={
                      <Stack direction="row" spacing={1} alignItems="center">
                        <GitHubIcon />
                        <span>Source Code</span>
                      </Stack>
                    }
                    beforeWidth={'0%'}
                    beforeBgColorHover="transparent"
                    hoverColor="var(--text-primary)"
                    textColor="var(--text-primary)"
                    disabled={project.gitLink === '#'}
                  />
                </a>
              </Stack>
            </Stack>
            <Stack
              sx={{
                width: { xs: '100%', lg: '45%' },
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: 'var(--box-shadow)',
              }}
            >
              <StyledImage
                src={require(`../../assets/images/${project.image}`)}
                alt={project.name}
                loading="eager"
              />
            </Stack>
          </ProjectCard>
        ))}
      </Box>
      <ShowMoreButton variant="contained" onClick={handleClick}>
        Show {showAll ? 'less' : 'more'} projects
      </ShowMoreButton>
    </Box>
  );
};

export default Work;
