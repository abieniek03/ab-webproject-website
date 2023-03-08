import { FC, useState, useEffect } from 'react';
import Head from 'next/head';

import CookieAlert from './CookieAlert';

interface ILayout {
	children: any;
	subtitle?: string;
}

const Layout: FC<ILayout> = (props) => {
	const [cookieVisible, setCookieVisible] = useState(true);

	const accept = () => {
		localStorage.setItem('accept-cookie', 'true');
		setCookieVisible(false);
	};

	useEffect(() => {
		localStorage.getItem('accept-cookie') ? setCookieVisible(false) : null;
	}, []);

	return (
		<>
			<Head>
				<meta
					name='keywords'
					content='AB Web Project, Programowanie, Programowanie Webowe, Początkujący programista, Portfolio programisty'
				/>
				<meta
					name='description'
					content="My name is Adrian. I'm from Poland and 19 years old. I'm interesting IT since the youngers age. At the age of 12 I started make graphic design. In summer 2018 Istarted interesting web development and create my first static website using HTML and CSS. I createed also UI/UX projects in the meantime. At the end of 2021 I stopped make graphics and focused for web programming. I know frontend and backend technologies, and create websites and web application. I'm constantly learning new things and developing myself."
				/>
				<title>AB Web Project{props.subtitle ? ` | ${props.subtitle}` : null}</title>
			</Head>
			<div className='bg-[#000a0f] text-slate-100 h-screen flex flex-col justify-center items-center overflow-hidden'>
				{cookieVisible && <CookieAlert accept={accept} />}
				{props.children}
			</div>
		</>
	);
};

export default Layout;
