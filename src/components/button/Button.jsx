import style from './button.module.css';

const Button = ({ text, type }) => {
	return (
		<a className={`${style.button} ${style[type]}`} href='#'>
			{text}
		</a>
	);
};

export default Button;
