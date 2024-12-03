import { FC } from 'react';
import CheckedSVG from '@/assets/icons/checked.svg';
import UncheckedSVG from '@/assets/icons/unchecked.svg';
import { ITodo, todoStore } from '../../store/todoStore';
import { Link } from 'react-router-dom';

interface IProps {
	todo: ITodo;
}

const TodoCard: FC<IProps> = ({ todo }) => {
	const updateCompleted = todoStore((state) => state.updateCompleted);
	const handleCheck = () => {
		updateCompleted(todo.id);
	};
	return (
		<div
			className={`flex items-center justify-between w-full py-[23px] pr-[19px] pl-[23px] border shadow-subtle-black bg-white border-neutral-light rounded-md`}
		>
			<div className='flex items-center cursor-pointer' onClick={handleCheck}>
				<button className='focus:outline-none'>
					{todo.completed ? (
						<span className='text-green-500 text-xl'>
							<img src={CheckedSVG} />
						</span>
					) : (
						<span className='text-gray-500 text-xl'>
							<img src={UncheckedSVG} />
						</span>
					)}
				</button>
				<span
					className={`ml-4 text-base font-medium ${
						todo.completed ? 'line-through text-neutral-dark' : 'text-primary-dark'
					}`}
				>
					{todo.text}
				</span>
			</div>
			<Link to={`/update/${todo.id}`}>
				<button className='text-primary-dark font-medium p-3 border border-primary-dark rounded focus:outline-none'>
					Edit
				</button>
			</Link>
		</div>
	);
};

export default TodoCard;
