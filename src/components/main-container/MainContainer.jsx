import Features from '../features/Features';
import Features2 from '../features2/Features2';
import GetStarted from '../get-started/GetStarted';
import Header from '../header/Header';
import Hero from '../hero/Hero';
import Pricing from '../pricing/pricing';
import Resources from '../resources/Resources';
import Testimonials from '../testimonials/Testimonials';

const MainContainer = () => {
	return (
		<div>
			<Header />
			<Hero />
			<Features />
			<Features2 />
			<Pricing />
			<Testimonials />
			<Resources />
			<GetStarted />
		</div>
	);
};

export default MainContainer;
