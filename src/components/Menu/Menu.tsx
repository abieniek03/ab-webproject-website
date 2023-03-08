import { FC } from 'react';

import MenuItem from './MenuItem';

const Menu: FC = () => {
	const menuItems = [
		{
			id: 0,
			title: 'About me',
			description: 'Find out how I interested programming and when I started my programming journey.',
			path: '/about',
		},
		{
			id: 1,
			title: 'Projects',
			description: 'See my projects. All of them are my individual projects.',
			path: '/projects',
		},
		{
			id: 2,
			title: 'Github',
			description: 'See code of my projects.',
			href: 'https://github.com/abieniek03',
		},
	];

	return (
		<div className='flex flex-col lg:flex-row xl:gap-6 mb-28 lg:mb-18 xl:mb-0'>
			{menuItems.map((menuItem) => (
				<MenuItem
					key={menuItem.id}
					title={menuItem.title}
					description={menuItem.description}
					path={menuItem.path}
					href={menuItem.href}
				/>
			))}
		</div>
	);
};

export default Menu;
