import Button from '../button/Button';
import style from './get-started.module.css';

const GetStarted = () => {
	return (
		<section className={style.container}>
			<div className={style.textContainer}>
				<h3>Get started with Neon</h3>
				<p>
					It only takes a few minutes to get started with Neon. Understand your
					users, start free, today.
				</p>
			</div>
			<Button text={'Start Free Trial'} type={'accent'} arrow={true} />
		</section>
	);
};

export default GetStarted;
