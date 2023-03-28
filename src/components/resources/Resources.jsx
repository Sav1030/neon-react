import { useState } from 'react';
import { tabsContent } from '../../constants/tabs';
import SectionTitle from '../section-title/SectionTitle';
import TabCard from '../tab-card/TabCard';
import style from './resources.module.css';

const Resources = () => {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<section className={style.resources}>
			<SectionTitle>
				Resources to help you get the most out of Neon
			</SectionTitle>
			<div className={style.tabTitlesContainer}>
				{tabsContent.map((item, index) => {
					return (
						<p key={item.key} onClick={() => setActiveTab(index)}>
							{item.title}
						</p>
					);
				})}
			</div>
			<div className={style.tabInfoContainer}>
				{tabsContent[activeTab].cards.map(card => {
					return <TabCard key={card.key} {...card} />;
				})}
			</div>
		</section>
	);
};

export default Resources;
