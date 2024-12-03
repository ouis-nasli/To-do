import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { ITodo, todoStore } from '../../store/todoStore';
import { useShallow } from 'zustand/shallow';

const TodoUpsert = () => {
	const { id } = useParams();
	const isNew = !id;
	const navigate = useNavigate();

	const [addTodo, editTodo, deleteTodos, todos] = todoStore(
		useShallow((state) => [state.addTodo, state.editTodo, state.deleteTodo, state.todos])
	);

	const selectedTodo = isNew ? null : (todos.find((todo) => todo.id === +id) as ITodo);

	const validationSchema = Yup.object().shape({
		text: Yup.string().required().min(2).max(50),
	});

	const formOptions = { resolver: yupResolver(validationSchema) };
	const { register, handleSubmit, formState } = useForm(formOptions);
	const { errors } = formState;

	const onSubmit = (inputs: any) => {
		if (isNew) {
			const data: ITodo = { text: inputs.text, completed: false, id: Math.floor(Math.random() * 1001) };
			addTodo(data);
		} else {
			const selectedTodo = todos.find((todo) => todo.id !== +id) as ITodo;
			selectedTodo.text = inputs.text;
			editTodo(selectedTodo);
		}
		navigate('/');
	};

	const handleDelete = () => {
		deleteTodos(+id! as unknown as number);
		navigate('/');
	};

	return (
		<div className='h-full'>
			<div className='relative w-[653px] bg-gray-100 min-h-screen  h-full '>
				<div className='h-[120px] shadow-black-blur bg-primary flex justify-center items-center'>
					<h1 className='text-2xl font-medium text-shadow-dark text-white'>{isNew ? 'Create' : 'Edit'} Task</h1>
				</div>
				<div className='px-5 py-7 h-full'>
					<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-between h-full'>
						<div>
							<p className='tracking-[0.115em]'>Task Name</p>
							<input
								type='text'
								className={`w-full text-primary-darker mt-[15px] bg-neutral-white border-2  rounded-[9px] px-[26px] pt-5 pb-[25px] text-2xl outline-none ${
									errors?.text ? 'border-danger-dark' : 'border-neutral'
								}`}
								defaultValue={selectedTodo?.text}
								{...register('text')}
							/>
						</div>
						<div className='absolute left-0 bottom-[25px] flex gap-x-5 w-full box-border px-[25px] '>
							{!isNew && (
								<button
									onClick={handleDelete}
									className='h-[61px] min-w-[121px] rounded-md bg-danger border-2 border-danger-dark shadow-button text-lg text-white text-shadow-dark'
								>
									Delete
								</button>
							)}
							<button className='h-[61px] w-full min-w-[121px] rounded-md bg-primary border-2 border-primary-dark shadow-button text-lg text-white text-shadow-dark'>
								Save
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default TodoUpsert;
