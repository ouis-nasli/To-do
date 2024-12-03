import { Outlet } from 'react-router-dom';

const TodoComponent = () => {
	return (
		<div className='flex justify-center w-screen'>
			<Outlet />
		</div>
	);
};

export default TodoComponent;
