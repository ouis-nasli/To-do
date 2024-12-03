import { useState } from 'react';
import Header from './components/Header';
import TodoCard from './TodoCard';
import ProUpgrade from './components/ProUpgrade';

export interface Plan {
	id: number;
	text: string;
	completed: boolean;
}

const TodoIndex = () => {
	const [plans, setPlans] = useState<Plan[]>([
		{ id: 1, text: 'Training at the Gym', completed: true },
		{ id: 2, text: 'Play Paddle with friends', completed: false },
		{ id: 4, text: 'Play Paddle with friends', completed: false },
		{ id: 5, text: 'Play Paddle with friends', completed: false },
		{ id: 6, text: 'Play Paddle with friends', completed: false },
		{ id: 3, text: 'Burger BBQ with family', completed: false },
	]);

	const handleToggle = (id: number) => {
		setPlans(plans.map((plan) => (plan.id === id ? { ...plan, completed: !plan.completed } : plan)));
	};

	return (
		<div>
			<div className='max-w-md mx-auto  bg-gray-100 min-h-screen relative flex flex-col items-end'>
				<div className='sticky top-0'>
					<Header />
					<ProUpgrade />
				</div>

				<div className='flex flex-col gap-y-6 mt-4 p-4 w-full'>
					{plans.map((plan) => (
						<TodoCard key={plan.id} todo={plan} handleToggle={handleToggle} />
					))}
				</div>

				<div className='fixed bottom-8 pr-4'>
					<button className='w-[61px] h-[61px] bg-primary border-2 border-primary-light text-white rounded-full text-shadow-dark '>
						<span className='text-2xl'>+</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default TodoIndex;
