import Button from '../button/Button';
import style from './hero.module.css';

const Hero = () => {
	return (
		<section className={style.hero}>
			<div className={style.heroContent}>
				<p className={style.metalButton}>
					Launching Infinite Workspaces. <a href='#'>Learn More</a>
				</p>
				<h1 className={style.heroTitle}>
					Where the world builds <em>software</em>
				</h1>
				<p className={style.heroText}>
					Our landing page template works on all devices, so you only have to
					set it up once, and get beautiful results forever.
				</p>
				<ul className={style.list}>
					<li>
						<Button text={'Get Started For Free'} type={'accent'} />
					</li>
					<li>
						<Button text={'Explore Docs'} type={'regular'} />
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Hero;
