import { FC } from 'react';
import Link from 'next/link';

interface IMenuItem {
	id?: number;
	title: string;
	description: string;
	path?: string;
	href?: string;
}

const itemStyles =
	'z-20 w-full max-w-[282px] lg:w-[282px] my-2 mx-auto p-2 text-center rounded-md border border-solid border-transparent hover:border-neutral-700 hover:bg-[#00070a] lg:mx-5';

const titleStyles = 'font-bold text-2xl text-[#081a24] text-white mb-1';

const MenuItem: FC<IMenuItem> = (props) => {
	return props.path === undefined ? (
		<a href={props.href} target='_blank' className={itemStyles}>
			<h2 className={titleStyles}>{props.title}</h2>
			<p className=' text-sm text-neutral-500'>{props.description}</p>
		</a>
	) : (
		<Link href={props.path} className={itemStyles}>
			<h2 className={titleStyles}>{props.title}</h2>
			<p className=' text-sm text-neutral-500'>{props.description}</p>
		</Link>
	);
};

export default MenuItem;
