import { v4 } from 'uuid';
import { PLANS } from '../../constants/plans';
import Plan from '../plan/Plan';
import style from './pricing.module.css';

const Pricing = () => {
	return (
		<section className={style.pricing}>
			<h2 className={style.title}>Find a plan that{`'`}s right for you</h2>
			<p className={style.text}>
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
				officia deserunt mollit anim id est.
			</p>
			<div className={style.cardContainer}>
				{PLANS.map(item => {
					return <Plan key={v4()} {...item} />;
				})}
			</div>
		</section>
	);
};

export default Pricing;
