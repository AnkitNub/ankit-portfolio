import { Stack, Typography } from '@mui/material';
import React from 'react';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
const StyledHeading = styled(Typography)`
	&& {
		position: relative;
		font-weight: 700;
		color: var(--white-text);
		padding-top: 3.4rem;
		margin-bottom: 5rem;
		letter-spacing: 5px;

		@media (max-width: 992px) {
			font-size: 2.75rem;
			margin-bottom: 3rem;
		}

		@media (max-width: 576px) {
			font-size: ${(props) => (props.exed ? '1.2rem' : '2.75rem')};
		}
	}
`;

const StyledSpan = styled.span`
	${(props) => (props.exed ? 'display: none;' : 'display: block;')}
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	bottom: -5px;
	width: 35%;
	height: 5px;
	background-color: var(--icons-colors);
`;

const headingVariant = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			type: 'spring',
			delay: 0.2,
		},
	},
};

const barVariant = {
	hidden: {
		transform: 'translateX(-50%) scale(0)',
	},
	visible: {
		transform: 'translateX(-50%) scale(1)',
		origin: 'center',
		transition: {
			duration: 0.5,
			type: 'tween',
			delay: 1,
		},
	},
};

const Heading = ({ headerText, id, justify, exed, restprops }) => {
	return (
		<Stack
			className="heading"
			justifyContent={!justify ? 'center' : justify}
			direction="row"
			{...restprops}
			id={id}>
			<StyledHeading
				component={motion.h2}
				variants={headingVariant}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				exed={exed}
				variant="h2">
				{headerText}
				<StyledSpan
					as={motion.span}
					variants={barVariant}
					exed={exed}></StyledSpan>
			</StyledHeading>
		</Stack>
	);
};

export default Heading;
