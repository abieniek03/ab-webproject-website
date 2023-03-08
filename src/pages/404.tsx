import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Layout from '@/components/Layout';
import Header from '@/components/Header';

const NotFound = () => {
	const router = useRouter();

	const [time, setTime] = useState<number>(10);

	useEffect(() => {
		setInterval(() => {
			setTime(time - 1);
		}, 1000);
	}, [time]);

	if (time === 0) {
		router.push('/');
	}

	return (
		<Layout>
			<Header />
			<div className='text-center'>
				<h1 className='text-2xl font-bold mb-2'>404. Not Found</h1>
				<p>
					Navigate to homepage will happen in <span className='font-bold'>{time} s.</span>
				</p>
			</div>
		</Layout>
	);
};

export default NotFound;
