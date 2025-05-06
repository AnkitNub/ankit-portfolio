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
		}
	}
`;

const Skills = () => {
	const [clickedElement, setClickedElemetn] = useState(1);
	const [chosenSkill, setChosenSkill] = useState(skills[0]);
	const handleClick = (id) => {
		setClickedElemetn(id);
		let skill = skills.filter((el) => (el.id === id ? el : ''));
		setChosenSkill(skill[0]);
	};
	return (
		<Box className="skills container black-container">
			<Heading
				id="skills"
				headerText="Skills"
			/>
			<Stack
				sx={{ flexDirection: { sm: 'column', lg: 'row' } }}
				gap="1rem">
				<Timeline
					position="alternate"
					sx={{
						padding: { xs: '0', lg: 'initial' },
						flexDirection: { xs: 'row', lg: 'column' },
						flexWrap: { xs: 'wrap', lg: 'nowrap' },
						justifyContent: { xs: 'unset', md: 'center', lg: 'unset' },
					}}>
					{skills.map((skill, index) => {
						return (
							<TimelineItem
								key={skill.id}
								sx={{
									flexDirection: { xs: 'row-reverse', lg: 'row' },
									direction: { xs: 'rtl', lg: 'ltr' },
									width: { xs: '120px', md: 'unset' },
								}}>
								<TimelineSeparator
									sx={{
										flexDirection: { xs: 'unset', lg: 'column' },
									}}>
									<TimelineDot
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
										}}
									/>
									{index === skills.length - 1 ? '' : <StyledConnector />}
								</TimelineSeparator>
								<StyledContent
									onClick={() => {
										handleClick(skill.id);
									}}>
									{skill.name}
								</StyledContent>
							</TimelineItem>
						);
					})}
				</Timeline>
				<Stack
					component={motion.div}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.4 }}
					viewport={{ once: true }}
					key={chosenSkill.id}
					className="glass-effect"
					sx={{
						width: { xs: '100%', lg: '74%' },
						padding: { xs: '2rem 1.5rem', lg: '3rem 5.5rem' },
						background: 'rgba(255, 255, 255, 0.03)',
						backdropFilter: 'blur(10px)',
						borderRadius: '15px',
						border: '1px solid rgba(255, 255, 255, 0.1)',
						transition: 'all 0.3s ease-in-out',
						'&:hover': {
							border: '1px solid var(--secondary-color)',
							transform: 'translateY(-5px)',
							boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
						}
					}}>
					<Stack
						justifyContent="space-between"
						alignItems="center"
						sx={{ gap: { xs: '3rem', md: '5rem', lg: '7rem' } }}>
						<Stack gap="0.5rem">
							<Typography
								variant="h4"
								fontWeight="700"
								sx={{ fontSize: { xs: '2', lg: '2.6' } }}
								color="var(--white-text)">
								{chosenSkill.name}
							</Typography>
							<Typography
								variant="body1"
								color="var(--white-text)"
								letterSpacing="1.3px"
								lineHeight="1.8"
								sx={{ fontSize: { xs: '0.9rem', lg: '1rem' } }}>
								{chosenSkill.info}
							</Typography>
						</Stack>
						<Box
							direction="row"
							sx={{
								transform: { xs: 'scale(2)', md: 'scale(3)', lg: 'scale(5)' },
								opacity: '0.3',
								marginBottom: { xs: '1rem', lg: '3rem' },
							}}>
							{chosenSkill.icon}
						</Box>
					</Stack>
				</Stack>
			</Stack>
		</Box>
	);
};

export default Skills;
