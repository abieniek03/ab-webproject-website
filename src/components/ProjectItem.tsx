import { FC } from 'react';
import Image from 'next/image';

import { SiGithub } from 'react-icons/si';

interface IProjectItem {
	title: string;
	imageSrc: string;
	buttonTitle: string;
	buttonLink?: string;
	repoLink?: string;
}

const ProjectItem: FC<IProjectItem> = (props) => {
	return (
		<div className='flex flex-col justify-center items-center m-8 p-6 relative before:absolute before:bg-[#44fa6b] before:h-[200px] before:w-[250px] before:top-[-50px] before:left-[-75px] before:rounded-full before:blur-2xl after:absolute after:bg-[#00a8ff] after:h-[200px] after:w-[250px] after:right-[-50px] after:bottom-[75px] after:rounded-full a after:blur-2xl before:opacity-10 after:opacity-10 lg:mx-12'>
			<div className='z-10'>
				<div>
					<Image src={props.imageSrc} alt={props.title} height={200} width={200} />
				</div>
				<div className='flex flex-col items-center lg:my-4'>
					<h2 className='font-bold my-2 text-center lg:text-xl '>{props.title.toUpperCase()}</h2>
					<div className='flex justify-between items-center'>
						<a
							href={props.buttonLink}
							target='_blank'
							className=' bg-[#000a0f] hover:bg-[#00070a] px-5 py-2 font-bold text-sm rounded-sm border border-solid border-neutral-700'
						>
							{props.buttonTitle.toUpperCase()}
						</a>
						<a href={props.repoLink} target='_blank'>
							{/* <ion-icon name='logo-github' data-name='github-icon' /> */}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectItem;
