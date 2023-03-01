import { FC } from 'react';
import Image from 'next/image';

const Header: FC = () => {
	return (
		<>
			<header className='my-20'>
				<figure className='relative before:absolute before:bg-[#44fa6b] dark:before:h-[200px] dark:before:w-[250px] dark:before:top-[-100px] dark:before:left-[-100px] dark:before:rounded-full dark:before:blur-2xl dark:after:absolute dark:after:bg-[#00a8ff] dark:after:h-[200px] dark:after:w-[250px] dark:after:right-[-100px] dark:after:bottom-[-100px] dark:after:rounded-full dark:after:blur-2xl dark:before:opacity-10 dark:after:opacity-10'>
					<Image src='/logo.svg' alt='AB Web Project' width={122} height={200} />
					{/* <img src={logo} alt='AB Web Project' className='relative m-auto w-2/3' /> */}
				</figure>
			</header>
		</>
	);
};

export default Header;
