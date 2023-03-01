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
				<h1 className='text-2xl font-bold mb-2'>Nie znaleziono takiej strony</h1>
				<p>
					Przekierowanie na stronę główną nastąpi za <span className='font-bold'>{time} sekund.</span>
				</p>
			</div>
		</Layout>
	);
};

export default NotFound;
