import Button from '../button/Button';
import style from './header.module.css';

const Header = () => {
	return (
		<header className={style.header}>
			<nav className={style.nav}>
				<img className={style.logo} src='assets/images/logo.svg' alt='Logo' />
				<ul className={style.list}>
					<li>
						<a className={style.navLink} href='#'>
							Sign in
						</a>
					</li>
					<li>
						<Button text={'Get Started'} type={'accent'} arrow={true} />
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
