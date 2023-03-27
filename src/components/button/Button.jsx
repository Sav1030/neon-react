import Arrow from '../arrow/Arrow';
import style from './button.module.css';

const Button = ({ text, type, arrow }) => {
	return (
		<a className={`${style.button} ${style[type]}`} href='#'>
			{text}
			{arrow && <Arrow />}
		</a>
	);
};

export default Button;
