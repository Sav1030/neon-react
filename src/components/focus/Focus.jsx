import { v4 } from 'uuid';
import { FEATURES } from '../../constants/features';
import { LOGOS } from '../../constants/logos';
import style from './focus.module.css';

const Focus = () => {
	return (
		<section className={style.focus}>
			<div className={style.logosGrid}>
				{LOGOS.map(item => {
					return <img key={v4()} src={item} />;
				})}
			</div>
			<h2 className={style.title}>Focus on solving bigger problems</h2>
			<img src='/assets/images/features.svg' alt='Features' />
			<div className={style.featuresGrid}>
				{FEATURES.map(item => {
					return (
						<article key={v4()} className={style.featuresCard}>
							<img src={item.icon} />
							<h3>{item.title}</h3>
							<p>{item.body}</p>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Focus;
