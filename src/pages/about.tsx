import { FC } from 'react';

import Layout from '@/components/Layout';

interface IAbout {
	paragrapgs: string[];
}

const About: FC<IAbout> = () => {
	const paragraphs = [
		"My name is Adrian. I'm from Poland and 19 years old. I'm interesting IT since the youngers age. At the age of 12 I started make graphic design. In summer 2018 Istarted interesting web development and create my first static website using HTML and CSS. I createed also UI/UX projects in the meantime.",
		"At the end of 2021 I stopped make graphics and focused for web programming. I know frontend and backend technologies, and create websites and web application. I'm constantly learning new things and developing myself.",
	];

	return (
		<Layout subtitle='About'>
			<div className='px-12 py-24 min-h-screen flex flex-col justify-center mx-auto max-w-screen-lg lg:text-lg relative before:fixed before:bg-[#44fa6b] before:h-[200px] before:w-[250px] before:top-[-50px] before:left-[-75px] before:rounded-full before:blur-2xl after:fixed after:bg-[#00a8ff] after:h-[200px] after:w-[250px] after:right-[-50px] after:bottom-[-50px] after:rounded-full after:blur-2xl before:opacity-10 after:opacity-10 lg:before:h-[600px] lg:before:w-[650px] lg:before:top-[-100px] lg:before:left-[-150px] lg:before:blur-[75px] lg:after:h-[600px] lg:after:w-[650px] lg:after:bottom-[-100px] lg:after:right-[-150px] lg:after:blur-[75px]'>
				<div className='z-10'>
					<h1 className='font-bold text-xl lg:text-[2rem] ml-1 lg:mb-2'>About me</h1>
					<div className='my-10'>
						{paragraphs.map((paragraph: string) => (
							<p key={0} className='mb-2 text-neutral-500'>
								{paragraph}
							</p>
						))}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default About;
