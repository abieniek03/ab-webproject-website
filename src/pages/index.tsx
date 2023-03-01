import { FC } from 'react';

import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Menu from '@/components/Menu/Menu';

const Homepage: FC = () => {
	document.title = 'AB Web Project';

	return (
		<Layout>
			<Header />
			<Menu />
		</Layout>
	);
};

export default Homepage;
