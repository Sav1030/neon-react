import { TESTIMONIALS } from '../../constants/testimonials';
import SectionTitle from '../section-title/SectionTitle';
import style from './testimonials.module.css';

const Testimonials = () => {
	return (
		<section className={style.testimonials}>
			<SectionTitle>
				Sound too good? Hear what our customers have to say
			</SectionTitle>
			<div className={style.grid}>
				{TESTIMONIALS.map(item => {
					return (
						<article key={item.id} className={style.card}>
							<img className={style.avatar} src={item.img} alt={item.name} />
							<p className={style.text}>{item.text}</p>
							<p className={style.author}>
								{item.name} - <a href='#'>{item.source}</a>
							</p>
						</article>
					);
				})}
				<div className={style.overlay}></div>
			</div>
		</section>
	);
};

export default Testimonials;
