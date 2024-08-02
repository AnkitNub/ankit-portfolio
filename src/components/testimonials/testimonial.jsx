import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import Heading from '../../utils/heading';
import { css, styled } from 'styled-components';
import { ReactComponent as Person } from '../../assets/icons/user-tie-solid.svg';
import { ReactComponent as Quote } from '../../assets/icons/quote-left-solid.svg';
import { ReactComponent as LeftArrow } from '../../assets/icons/arrow-left-solid.svg';
import { ReactComponent as RightArrow } from '../../assets/icons/arrow-right-solid.svg';
import { testimonials } from '../../data/testimonialsData';
import { motion } from 'framer-motion';

const Circle = styled(Box)`
	width: 100px;
	height: 100px;
	padding: 5px;
	background-color: var(--red-text);
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledQuote = css`
	&& {
		position: absolute;
		fill: var(--icons-colors);
		width: 150px;
		opacity: 0.2;
	}
`;

const StyledLeftQuote = styled(Quote)`
	${StyledQuote}

	left: 30rem;
	top: 10rem;
	transform: rotate(-177.306deg);

	@media (max-width: 800px) {
		& {
			left: 10rem;
		}
	}
	@media (max-width: 750px) {
		& {
			left: 1rem;
		}
	}
`;

const StyledRightQuote = styled(Quote)`
	${StyledQuote}
	right: 26rem;
	bottom: 7rem;
	transform: rotate(3.827deg);
	@media (max-width: 800px) {
		& {
			right: 10rem;
		}
	}
	@media (max-width: 750px) {
		& {
			right: 1rem;
		}
	}
`;

const StyledButton = css`
	&& {
		position: absolute;
		max-width: 50px;
		top: 52%;
		transform: translateY(-50%);
		border-radius: 50%;
		z-index: 2;
	}
`;

const StyledArrow = css`
	&& {
		fill: var(--gray-text);
		width: 90%;
	}
	@media (max-width: 576px) {
		&& {
			width: 75%;
		}
	}
`;

const StyledLeftArrow = styled(LeftArrow)`
	${StyledArrow}
`;

const StyledRightArrow = styled(RightArrow)`
	${StyledArrow}
`;
const LeftButton = styled(Button)`
	${StyledButton}
	left: 20%;
	@media (max-width: 576px) {
		left: 3%;
	}
`;
const RightButton = styled(Button)`
	${StyledButton}
	right: 20%;
	@media (max-width: 576px) {
		right: 3%;
	}
`;
const Testimonials = () => {
	const [activeElement, setActiveElement] = useState(0);

	const handlePrev = () => {
		if (activeElement > 0) {
			setActiveElement(activeElement - 1);
		} else {
			setActiveElement(testimonials.length - 1);
		}
		console.log(activeElement);
	};

	const handleNext = () => {
		if (activeElement < testimonials.length - 1) {
			setActiveElement(activeElement + 1);
		} else {
			setActiveElement(0);
		}
	};
	return (
		<Box
			className="testimonials container second-black-container"
			sx={{ position: 'relative', paddingBottom: '2rem' }}>
			{/* quotes icons in the background */}
			<StyledLeftQuote></StyledLeftQuote>
			<StyledRightQuote></StyledRightQuote>
			<Heading
				headerText="Testimonials"
				id="testimonials"
			/>
			<LeftButton
				onClick={handlePrev}
				variant="text">
				<StyledLeftArrow />
			</LeftButton>
			<RightButton
				onClick={handleNext}
				variant="text">
				<StyledRightArrow />
			</RightButton>
			<Box
				component={motion.div}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1, delay: 0.7 }}
				viewport={{ once: true }}>
				{/* Container of the testimonials data and its buttons */}
				<Stack
					position="relative"
					direction="row"
					overflow="hidden">
					{/* Container for the testimonials data */}
					{testimonials.map((testimonial, index) => {
						return (
							<Stack
								alignItems="center"
								width="100%"
								gap="1rem"
								position={activeElement !== index ? 'absolute' : ''}
								sx={{
									transition: 'all 0.3s linear',
									transform:
										activeElement !== index && index > activeElement
											? 'translateX(100%)'
											: activeElement !== index && index < activeElement
											? 'translateX(-100%)'
											: '',
								}}
								key={testimonial.id}>
								<Circle>
									<Person
										style={{ transform: 'scale(0.7)', fill: '#2B303E' }}
									/>
								</Circle>
								<Stack alignItems="center">
									<Typography
										variant="h5"
										fontWeight="600"
										color="var(--white-text)"
										textAlign="center">
										{testimonial.name}
									</Typography>
									<Typography
										variant="body1"
										fontWeight="500"
										color="var(--gray-text)">
										{testimonial.country}
									</Typography>
								</Stack>
								<Stack
									direction="row"
									gap="0.5rem">
									{testimonial.rate.map((star) => {
										return star;
									})}
								</Stack>
								<Typography
									variant="subtitle1"
									color="white"
									maxWidth="449px"
									height="200px"
									textAlign="center">
									{testimonial.opinion}
								</Typography>
							</Stack>
						);
					})}
				</Stack>
			</Box>
		</Box>
	);
};

export default Testimonials;
