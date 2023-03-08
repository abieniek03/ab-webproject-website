import { FC } from 'react';

interface ICookieAlert {
	accept: () => void;
}

const CookieAlert: FC<ICookieAlert> = (props) => {
	return (
		<div className='fixed z-50 bottom-0 w-screen flex justify-center px-12 md:px-4 lg:px-0 py-4 bg-[#00070a] text-neutral-500'>
			<div className='w-screen-sm md:w-1/2 flex flex-col justify-between lg:flex-row items-start lg:items-center text-xs lg:text-sm'>
				<p className='mb-2 md:mb-0'>The website uses cookies to collect information on the visit counts.</p>
				<button
					onClick={props.accept}
					className='px-4 py-2 font-bold text-xs rounded-sm border border-solid border-neutral-700 bg-[#00070a] hover:bg-[#000a0f]'
				>
					OK
				</button>
			</div>
		</div>
	);
};

export default CookieAlert;
