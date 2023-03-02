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
					content='W sierpniu 2018 roku zaznajomiłem się z tworzeniem stron internetowych. Bardzo mi się to spodobało. Od czasu do czasu zacząłem projektować strony intenetowe, które od czasu do czasu tworzyłem później w HTML i CSS. Poważną przygodę z programowaniem rozpocząłem w drugiej połowie 2021 roku. Skupiłem się na front-end web developmencie. Tworzę nowoczesne strony i aplikacje internetowe. Zdarza mi się też pracować w zespole, co bardzo lubię i cenię. Praca przy większych projektach z innymi programistami to bardzo cenne doświadczenie. Czasami wracam do grafiki, zajmuję się projektowaniem stron internetowych i interfejsów aplikacji (UI/UX Design).'
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
