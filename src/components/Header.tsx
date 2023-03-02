import { FC } from 'react';
import Image from 'next/image';

const Header: FC = () => {
	return (
		<>
			<header className='my-20'>
				<figure className='relative before:absolute before:bg-[#44fa6b] before:h-[200px] before:w-[250px] before:top-[-100px] before:left-[-100px] before:rounded-full before:blur-2xl after:absolute after:bg-[#00a8ff] after:h-[200px] after:w-[250px] after:right-[-100px] after:bottom-[-100px] after:rounded-full after:blur-2xl before:opacity-10 after:opacity-10'>
					<Image src='/logo.svg' alt='AB Web Project' width={122} height={200} />
				</figure>
			</header>
		</>
	);
};

export default Header;
