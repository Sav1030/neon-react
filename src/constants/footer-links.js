import { v4 } from 'uuid';

const LINKS = [
	{
		id: v4(),
		title: 'Products',
		links: [
			{ id: v4(), link: 'Neon Manage' },
			{ id: v4(), link: 'Neon Analyse' },
			{ id: v4(), link: 'Neon Launch' },
			{ id: v4(), link: 'Experimentation' }
		]
	},

	{
		id: v4(),
		title: 'Resources',
		links: [
			{ id: v4(), link: 'Blog' },
			{ id: v4(), link: 'Cheat Sheet' },
			{ id: v4(), link: 'Channel Partners' },
			{ id: v4(), link: 'Affiliate Program' }
		]
	},
	{
		id: v4(),
		title: 'Compare',
		links: [
			{ id: v4(), link: 'Session Recording' },
			{ id: v4(), link: 'Feature Flags' },
			{ id: v4(), link: 'Heatmaps' },
			{ id: v4(), link: 'Correlation Analysis' }
		]
	},
	{
		id: v4(),
		title: 'Company',
		links: [
			{ id: v4(), link: 'About Us' },
			{ id: v4(), link: 'Our Story' },
			{ id: v4(), link: 'Work With Us' }
		]
	}
];

export { LINKS };
