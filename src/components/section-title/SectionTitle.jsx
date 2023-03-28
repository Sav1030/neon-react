import style from './section-title.module.css';

const SectionTitle = ({ children }) => {
	return <h2 className={style.title}>{children}</h2>;
};

export default SectionTitle;
