import style from './section-subtitle.module.css';

const SectionSubtitle = ({ content }) => {
	return <p className={style.text}>{content}</p>;
};

export default SectionSubtitle;
