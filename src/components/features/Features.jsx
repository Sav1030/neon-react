import { FEATURES } from '../../constants/features';
import { LOGOS } from '../../constants/logos';
import style from './features.module.css';

const Features = () => {
	return (
		<section className={style.features}>
			<div className={style.logosGrid}>
				{LOGOS.map(item => {
					return <img key={item.id} src={item.src} />;
				})}
			</div>
			<h2 className={style.title}>Focus on solving bigger problems</h2>
			<img src='/assets/images/features.svg' alt='Features' />
			<div className={style.featuresGrid}>
				{FEATURES.map(item => {
					return (
						<article key={item.id} className={style.featuresCard}>
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

export default Features;
