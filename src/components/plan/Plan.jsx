import { v4 } from 'uuid';
import Button from '../button/Button';
import style from './plan.module.css';

const Plan = ({
	name,
	priceMonth,
	description,
	featuresTitle,
	features,
	popular
}) => {
	return (
		<div className={popular ? `${style.card} ${style.popular}` : style.card}>
			<h3 className={style.title}>{name}</h3>
			<p className={style.price}>{priceMonth}</p>
			<p className={style.text}>{description}</p>
			<Button text='Start Free Trial' type='accent' arrow={true} />
			<p className={style.listTitle}>{featuresTitle}</p>
			<ul>
				{features.map(item => {
					return (
						<li key={v4()} className={style.listItem}>
							{item}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Plan;
