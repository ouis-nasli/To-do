import AvatarPNG from '@/assets/imgs/avatars/avatar.png';

const Header = () => {
	return (
		<div className='flex justify-center gap-x-5 px-8 py-5 bg-primary'>
			<div className='rounded-full overflow-hidden min-w-[50px] min-h-[50px]'>
				<img src={AvatarPNG} alt='' className='min-w-[50px] min-h-[50px]' />
			</div>
			<div className='text-white'>
				<h1 className='text-lg font-medium text-shadow-dark'>Hello, Jhon</h1>
				<p className='text-[25px] font-[100] italic text-shadow-dark leading-[26.46px] '>
					What are your plans for today?
				</p>
			</div>
		</div>
	);
};

export default Header;
