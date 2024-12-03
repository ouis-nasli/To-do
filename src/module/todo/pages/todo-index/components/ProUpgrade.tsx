import ProUpgradeSVG from '@/assets/imgs/pro-upgrade.svg';

const ProUpgrade = () => {
	return (
		<div className='relative flex items-center gap-x-6 py-9 px-6 bg-secondary border-2 border-secondary-dark shadow-inset-soft'>
			<div>
				<img src={ProUpgradeSVG} alt='' />
			</div>
			<div>
				<p className='text-shadow-light text-lg font-bold text-primary-dark'>Go Pro Upgrade Now</p>
			</div>
			<div className='absolute right-6 -top-[2px] w-16 h-[71px] bg-primary-dark flex items-center justify-center'>
				<p className='text-yellow-dark text-lg font-medium'>$1</p>
			</div>
		</div>
	);
};

export default ProUpgrade;
