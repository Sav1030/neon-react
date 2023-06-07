// import { v4 } from 'uuid';
// import { PLANS } from '../../constants/plans';
// import Plan from '../plan/Plan';
import SectionSubtitle from '../section-subtitle/SectionSubtitle';
import SectionTitle from '../section-title/SectionTitle';
import style from './pricing.module.css';

const Pricing = () => {
	return (
		<section className={style.pricing}>
			<SectionTitle
				margin={'small'}
			>{`Find a plan that's right for you`}</SectionTitle>
			<SectionSubtitle
				content='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
						officia deserunt mollit anim id est.'
			/>
			{/* <div className={style.cardContainer}>
				{PLANS.map(item => {
					return <Plan key={v4()} {...item} />;
				})}
			</div> */}
		</section>
	);
};

export default Pricing;
