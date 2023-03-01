import { FC } from 'react';

import MenuItem from './MenuItem';

const Menu: FC = () => {
	const menuItems = [
		{
			id: 0,
			title: 'O mnie',
			description: 'Dowiedz się, jak zainteresowałem się programowaniem i czym dokładnie się zajmuję.',
			path: '/about',
		},
		{
			id: 1,
			title: 'Projekty',
			description: 'Zobacz moje projekty. Znajdziesz tu tylko projekty indywidualne.',
			path: '/projects',
		},
		{
			id: 2,
			title: 'GitHub',
			description: 'Dowiedz się więcej na temat technolgoii, które wykorozystuje. Zobacz moje projekty od strony kodu.',
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
