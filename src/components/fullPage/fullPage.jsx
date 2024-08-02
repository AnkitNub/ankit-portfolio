import React from 'react';
import { Box } from '@mui/material';
import Home from '../Home/home';
import About from '../about/about';
import Services from '../services/services';
import Exed from '../exed/exed';
import Work from '../work/work';
import Skills from '../skills/skills';
import Testimonials from '../testimonials/testimonial';
import Footer from '../footer/footer';
const FullPage = () => {
	return (
		<Box className="fullcontainer">
			<Home />
			<About />
			<Services />
			<Exed />
			<Work />
			<Skills />
			<Testimonials />
			<Footer />
		</Box>
	);
};

export default FullPage;
