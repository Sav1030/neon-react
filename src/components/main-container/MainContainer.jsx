import Features from '../features/Features';
import Features2 from '../features2/Features2';
import Header from '../header/Header';
import Hero from '../hero/Hero';

const MainContainer = () => {
	return (
		<div>
			<Header />
			<Hero />
			<Features />
			<Features2 />
		</div>
	);
};

export default MainContainer;
