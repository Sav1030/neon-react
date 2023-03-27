import Features from '../features/Features';
import Features2 from '../features2/Features2';
import Header from '../header/Header';
import Hero from '../hero/Hero';
import Pricing from '../pricing/pricing';

const MainContainer = () => {
	return (
		<div>
			<Header />
			<Hero />
			<Features />
			<Features2 />
			<Pricing />
		</div>
	);
};

export default MainContainer;
