import { v4 } from 'uuid';

const tabsContent = [
	{
		key: v4(),
		title: 'For Developers',
		cards: [
			{
				key: v4(),
				icon: 'public/assets/images/telegram.svg',
				title: 'Neon Telegram'
			},
			{
				key: v4(),
				icon: 'public/assets/images/github.svg',
				title: 'Neon GitHub'
			},
			{ key: v4(), icon: 'public/assets/images/docs.svg', title: 'Neon Docs' },
			{
				key: v4(),
				icon: 'public/assets/images/youtube.svg',
				title: 'Neon Tutorials'
			}
		]
	},
	{
		key: v4(),
		title: 'For Designers',
		cards: [
			{
				key: v4(),
				icon: 'public/assets/images/discord.svg',
				title: 'Neon Discord'
			},
			{
				key: v4(),
				icon: 'public/assets/images/medium.svg',
				title: 'Neon Medium'
			},
			{ key: v4(), icon: 'public/assets/images/docs.svg', title: 'Neon Docs' },
			{
				key: v4(),
				icon: 'public/assets/images/youtube.svg',
				title: 'Neon Tutorials'
			}
		]
	},
	{
		key: v4(),
		title: 'For Founders',
		cards: [
			{
				key: v4(),
				icon: 'public/assets/images/telegram.svg',
				title: 'Neon Telegram'
			},
			{
				key: v4(),
				icon: 'public/assets/images/discord.svg',
				title: 'Neon Discord'
			},
			{
				key: v4(),
				icon: 'public/assets/images/medium.svg',
				title: 'Neon Medium'
			},
			{ key: v4(), icon: 'public/assets/images/docs.svg', title: 'Neon Docs' }
		]
	},
	{
		key: v4(),
		title: 'For Marketers',
		cards: [
			{
				key: v4(),
				icon: 'public/assets/images/telegram.svg',
				title: 'Neon Telegram'
			},
			{
				key: v4(),
				icon: 'public/assets/images/medium.svg',
				title: 'Neon Medium'
			},
			{
				key: v4(),
				icon: 'public/assets/images/github.svg',
				title: 'Neon GitHub'
			},
			{
				key: v4(),
				icon: 'public/assets/images/youtube.svg',
				title: 'Neon Tutorials'
			}
		]
	}
];

export { tabsContent };
