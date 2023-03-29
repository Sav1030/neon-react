import { LINKS } from '../../constants/footer-links';
import style from './footer.module.css';

const Footer = () => {
	return (
		<footer className={style.footer}>
			<div>
				<img className={style.logo} src='assets/images/logo.svg' alt='Logo' />
				<a href='#'>Terms</a> · <a href='#'>Privacy Policy</a>
			</div>
			{LINKS.map(item => {
				return (
					<ul key={item.id}>
						<li className={style.liTitle}>{item.title}</li>
						{item.links.map(link => {
							return (
								<li key={link.id} className={style.liItem}>
									<a href='#'>{link.link}</a>
								</li>
							);
						})}
					</ul>
				);
			})}
		</footer>
	);
};

export default Footer;
