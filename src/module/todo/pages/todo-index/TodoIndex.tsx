import { useState } from 'react';
import Header from './components/Header';
import ProUpgrate from './components/ProUpgrate';

interface Plan {
	id: number;
	text: string;
	completed: boolean;
}

const TodoIndex = () => {
	const [plans, setPlans] = useState<Plan[]>([
		{ id: 1, text: 'Training at the Gym', completed: true },
		{ id: 2, text: 'Play Paddle with friends', completed: false },
		{ id: 3, text: 'Burger BBQ with family', completed: false },
	]);

	const handleToggle = (id: number) => {
		setPlans(plans.map((plan) => (plan.id === id ? { ...plan, completed: !plan.completed } : plan)));
	};

	return (
		<div>
			<div className='max-w-md mx-auto p-6 bg-gray-100 min-h-screen'>
				{/* Header Section */}
				<Header />

				{/* Pro Upgrade Section */}
				<ProUpgrate />
				{/* <div className='bg-lime-500 p-3 flex justify-between items-center text-white'>
					<div className='flex items-center'>
						<span className='text-xl font-bold'>🏆</span>
						<span className='ml-2'>Go Pro Upgrade Now</span>
					</div>
					<div className='bg-blue-800 p-2 rounded-full text-xs'>$1</div>
				</div> */}

				{/* Plans List */}
				<div className='bg-white rounded-lg shadow mt-4 p-4'>
					{plans.map((plan) => (
						<div
							key={plan.id}
							className={`flex items-center justify-between p-3 mb-2 border ${
								plan.completed ? 'bg-green-100 border-green-400' : 'bg-gray-50 border-gray-300'
							} rounded-md`}
						>
							<div className='flex items-center'>
								<button onClick={() => handleToggle(plan.id)} className='focus:outline-none'>
									{plan.completed ? (
										<span className='text-green-500 text-xl'>✔️</span>
									) : (
										<span className='text-gray-500 text-xl'>⭕</span>
									)}
								</button>
								<span
									className={`ml-4 text-lg ${
										plan.completed ? 'line-through text-gray-500' : 'text-gray-800'
									}`}
								>
									{plan.text}
								</span>
							</div>
							<button className='text-blue-500 hover:text-blue-700 focus:outline-none'>Edit</button>
						</div>
					))}
				</div>

				{/* Floating Add Button */}
				<div className='fixed bottom-8 right-8'>
					<button className='bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700'>
						<span className='text-2xl'>+</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default TodoIndex;
