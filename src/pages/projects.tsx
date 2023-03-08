import { FC } from 'react';

import Layout from '@/components/Layout';
import ProjectItem from '@/components/ProjectItem';

const Projects: FC = () => {
	const projects = [
		{
			id: 0,
			imageSrc: '/rps-project.png',
			title: 'RPS Game',
			buttonTitle: 'Play',
			buttonLink: 'https://bit.ly/3UnZPP2',
			repoLink: 'https://bit.ly/3Uqgilq',
		},
		{
			id: 1,
			imageSrc: '/wa-project.png',
			title: 'Weather App',
			buttonTitle: 'Check',
			buttonLink: 'https://bit.ly/3jR3Jmf',
			repoLink: 'https://bit.ly/3GoP3ne',
		},
	];
	return (
		<Layout subtitle='Projects'>
			<div className='p-12 min-h-screen flex justify-center items-center m-auto max-w-screen-xl lg:flex-row'>
				<div className='z-10 flex flex-col lg:flex-row'>
					{projects.map((project) => (
						<ProjectItem
							key={project.id}
							imageSrc={project.imageSrc}
							title={project.title}
							buttonTitle={project.buttonTitle}
							buttonLink={project.buttonLink}
							repoLink={project.repoLink}
						/>
					))}
				</div>
			</div>
		</Layout>
	);
};

export default Projects;
