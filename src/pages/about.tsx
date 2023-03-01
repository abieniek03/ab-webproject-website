import { FC } from 'react';
import Image from 'next/image';

import Layout from '@/components/Layout';

import { SiInstagram, SiGithub } from 'react-icons/si';

interface IAbout {
	paragrapgs: string[];
}

const About: FC<IAbout> = () => {
	document.title = 'AB Web Project | About';

	const paragraphs = [
		'Chodzę do czwartej klasy technikum informatycznego. Odkąd pamiętam zawsze interesowałem się komputerami. Przez długi czas byłem związany z grafiką komputerową. W sierpniu 2018 roku zaznajomiłem się z tworzeniem stron internetowych. Bardzo mi się to spodobało. Od czasu do czasu zacząłem projektować strony intenetowe, które tworzyłem później w HTML i CSS.',
		'W drugiej połowie 2021 roku zacząłem skupiać się na programowaniu. Tworzę strony i aplikacje internetowe. Zdarza mi się też pracować w zespole, co bardzo lubię i cenię. Praca przy większych projektach z innymi programistami to bardzo cenne doświadczenie. Czasami wracam do grafiki, zajmuję się projektowaniem stron internetowych i interfejsów aplikacji.',
	];

	return (
		<Layout>
			<div className='px-12 py-24 min-h-screen flex flex-col justify-center mx-auto max-w-screen-lg lg:text-lg relative before:fixed before:bg-[#44fa6b] before:h-[200px] before:w-[250px] before:top-[-50px] before:left-[-75px] before:rounded-full before:blur-2xl after:fixed after:bg-[#00a8ff] after:h-[200px] after:w-[250px] after:right-[-50px] after:bottom-[-50px] after:rounded-full after:blur-2xl before:opacity-10 after:opacity-10 lg:before:h-[600px] lg:before:w-[650px] lg:before:top-[-100px] lg:before:left-[-150px] lg:before:blur-[75px] lg:after:h-[600px] lg:after:w-[650px] lg:after:bottom-[-100px] lg:after:right-[-150px] lg:after:blur-[75px]'>
				<div className='z-10'>
					<div className='flex items-center'>
						<Image
							src='/profile.jpg'
							alt='avatar'
							width={100}
							height={100}
							className='rounded-full w-20 mr-4 lg:w-32 lg:mr-6 lg:shadow-custom-avatar-lg'
						/>
						<div>
							<h1 className='font-bold text-xl lg:text-[2rem] ml-1 lg:mb-2'>Adrian Bieniek</h1>
							{/* <p className='text-sm lg:text-lg'>Web developer</p> */}
							<div>
								<a
									href='https://github.com/abieniek03'
									target='_blank'
									title='@abieniek03'
									className='inline-flex justify-center items-center p-1 mr-1 relative'
								>
									<SiGithub className='flex justify-center items-center self-center text-xl lg:text-2xl' />
								</a>
								<a
									href='https://www.instagram.com/a.bieniek_/'
									target='_blank'
									title='@a.bieniek_'
									className='inline-flex justify-center items-center p-1 mr-1 relative'
								>
									<SiInstagram className='flex justify-center items-center self-center text-xl lg:text-2xl' />
								</a>
							</div>
						</div>
					</div>
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
