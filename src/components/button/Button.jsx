import style from './button.module.css';

const Button = ({ text, type, arrow }) => {
	const includeArrow = () => {
		return (
			<img src='/assets/images/arrow-right-white.svg' className={style.arrow} />
		);
	};

	return (
		<a className={`${style.button} ${style[type]}`} href='#'>
			{text}
			{arrow && includeArrow()}
		</a>
	);
};

export default Button;
