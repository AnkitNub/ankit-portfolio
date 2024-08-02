import { Box, Stack, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import Heading from '../../utils/heading';
import { projData } from '../../data/projectsData';
import CustomButton from '../../utils/customButton';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

const StyledName = styled(Typography)`
	color: var(--white-text) !important;
	font-weight: 700 !important;
	font-family: 'Inter', sans-serif !important;
`;

const StyledParagraph = styled(Typography)`
	color: var(--gray-text) !important;
	max-width: 80%;
	font-size: 18px !important;
	margin: 0.3rem 0 !important;
	@media (max-width: 768px) {
		max-width: unset;
		font-size: 14px;
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
		color: var(--red-text);
		background-color: var(--second-black-background);
		z-index: 3;
		box-shadow: 0 -3px 10px 2px rgb(255 154 141 / 12%);
	}

	&&:hover {
		background-color: #333333;
		box-shadow: 0 -3px 10px 2px rgb(255 154 141 / 12%);
	}
`;
const Work = () => {
	const [buttonText, setButtonText] = useState('more');
	const [projectHeight, setProjectHeight] = useState('105rem');

	const handleClick = () => {
		if (buttonText === 'more') {
			setButtonText('less');
			setProjectHeight('100%');
		} else {
			setButtonText('more');
			setProjectHeight('105rem');
		}
	};
	return (
		<Box
			className="work container second-black-container"
			sx={{
				height: projectHeight,
				overflowY: 'clip',
				position: 'relative',
				transition: 'all 0.5s linear',
			}}>
			<Heading
				headerText="My Work"
				id="work"
			/>
			<ShowMoreButton
				variant="contained"
				onClick={handleClick}>
				Show {buttonText} projects
			</ShowMoreButton>
			<Box className="projects">
				{projData.map((project) => {
					return (
						<Stack
							component={motion.div}
							initial={{ y: 100, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 1 }}
							viewport={{ once: true }}
							sx={{
								flexDirection: { xs: 'column-reverse', lg: 'row' },
								marginBottom: { xs: '2rem', lg: '1rem' },
							}}
							alignItems="center"
							justifyContent="space-between"
							key={project.id}>
							<Stack
								sx={{
									width: { xs: '100%', lg: '50%' },
									alignItems: { xs: 'center', lg: 'unset' },
									textAlign: { xs: 'center', lg: 'unset' },
								}}>
								<StyledName variant="h4">{project.name}</StyledName>
								<StyledParagraph variant="body1">
									{project.describtion}
								</StyledParagraph>
								<Stack
									direction="row"
									height="50px"
									alignItems="center"
									gap={2}
									margin="0.5rem 0 0.7rem">
									{project.languages.map((lang) => lang)}
								</Stack>
								<Stack
									sx={{
										flexDirection: { xs: 'column-reverse', lg: 'row' },
										rowGap: { xs: '1rem', lg: 'unset' },
										columnGap: { xs: 'unset', lg: '1rem' },
									}}
									spacing={3}>
									<a
										href={project.link}
										target="_blank"
										rel="noreferrer"
										style={{
											width: { xs: '100%', lg: 'fit-content' },
											pointerEvents: project.done ? '' : 'none',
										}}>
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
										}}>
										<CustomButton
											content="Learn more"
											beforeWidth={'0%'}
											beforeBgColorHover="var(--red-text)"
											hoverColor="black"
											textColor="var(--white-text)"
											disabled={project.gitLink === '#' ? true : false}
										/>
									</a>
								</Stack>
							</Stack>
							<Stack
								sx={{ width: { xs: '100%', lg: '50%' } }}
								direction="row"
								overflow="hidden"
								justifyContent="center">
								<img
									src={require(`../../assets/images/${project.image}`)}
									alt={project.name}
									loading="eager"
									style={{
										width: '100%',
										objectFit: 'cover',
										transform: 'scale(1.3)',
									}}
								/>
							</Stack>
						</Stack>
					);
				})}
			</Box>
		</Box>
	);
};

export default Work;
