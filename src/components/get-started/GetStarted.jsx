import Button from '../button/Button';
import style from './get-started.module.css';

const GetStarted = () => {
	return (
		<section className={style.container}>
			<div className={style.textContainer}>
				<h3 className={style.title}>Get started with Neon</h3>
				<p className={style.text}>
					It only takes a few minutes to get started with Neon. Understand your
					users, start free, today.
				</p>
			</div>
			<Button text={'Start Free Trial'} type={'accentSmall'} arrow={true} />
		</section>
	);
};

export default GetStarted;
