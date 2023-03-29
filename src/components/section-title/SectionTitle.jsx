import style from './section-title.module.css';

const SectionTitle = ({ children, margin }) => {
	return <h2 className={`${style.title} ${style[margin]}`}>{children}</h2>;
};

export default SectionTitle;
