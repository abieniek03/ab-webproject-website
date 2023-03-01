import { FC } from 'react';

import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Menu from '@/components/Menu/Menu';
const Homepage: FC = () => {
	return (
		<Layout>
			<Header />
			<Menu />
		</Layout>
	);
};

export default Homepage;
