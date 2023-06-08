import Billing from '../billing/Billing';
import Features from '../features/Features';
import Features2 from '../features2/Features2';
import Footer from '../footer/Footer';
import GetStarted from '../get-started/GetStarted';
import Header from '../header/Header';
import Hero from '../hero/Hero';
import Resources from '../resources/Resources';
import Testimonials from '../testimonials/Testimonials';

const MainContainer = () => {
	return (
		<div>
			<Header />
			<Hero />
			<Features />
			<Features2 />
			<Billing />
			<Testimonials />
			<Resources />
			<GetStarted />
			<Footer />
		</div>
	);
};

export default MainContainer;
