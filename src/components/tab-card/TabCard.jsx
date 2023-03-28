import style from './tab-card.module.css';

const TabCard = ({ icon, title }) => {
	return (
		<article className={style.card}>
			<div className={style.logo}>
				<img src={icon} alt='title' />
			</div>
			<h3 className={style.title}>{title}</h3>
		</article>
	);
};

export default TabCard;
