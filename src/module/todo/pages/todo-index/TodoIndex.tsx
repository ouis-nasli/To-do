import Header from './components/Header';
import TodoCard from './TodoCard';
import ProUpgrade from './components/ProUpgrade';
import { Link } from 'react-router-dom';
import { todoStore } from '../../store/todoStore';

const TodoIndex = () => {
	const todos = todoStore((state) => state.todos);

	return (
		<div>
			<div className='max-w-md mx-auto  bg-gray-100 min-h-screen relative flex flex-col items-end'>
				<div className='sticky top-0'>
					<Header />
					<ProUpgrade />
				</div>

				<div className='flex flex-col gap-y-6 mt-4 p-4 w-full'>
					{todos.map((todo) => (
						<TodoCard key={todo.id} todo={todo} />
					))}
				</div>

				<div className='fixed bottom-8 pr-4'>
					<Link to='/create'>
						<button className='w-[61px] h-[61px] bg-primary border-2 border-primary-light text-white rounded-full text-shadow-dark '>
							<span className='text-2xl'>+</span>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TodoIndex;
