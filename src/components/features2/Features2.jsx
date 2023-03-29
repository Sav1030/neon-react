import SectionSubtitle from '../section-subtitle/SectionSubtitle';
import SectionTitle from '../section-title/SectionTitle';
import style from './features2.module.css';

const Features2 = () => {
	return (
		<section className={style.features}>
			<div className={style.featuresContent}>
				<div className={style.heading}>
					<SectionTitle margin={'small'}>
						Use sensitive data without sacrificing privacy
					</SectionTitle>
					<SectionSubtitle
						content='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
						officia deserunt mollit anim id est.'
					/>
				</div>
				<article className={style.twoCols}>
					<div>
						<img src='/assets/images/features-02.png' alt='Features' />
					</div>
					<div>
						<h3 className={style.articleTitle}>
							Standardized dev environments
						</h3>
						<p className={style.text}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<ul>
							<li className={style.listItem}>Performance reviews</li>
							<li className={style.listItem}>Objectives and goal setting</li>
							<li className={style.listItem}>Manager check-ins</li>
						</ul>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Features2;
