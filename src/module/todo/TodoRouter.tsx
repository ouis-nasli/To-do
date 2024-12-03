import { Route, Routes } from 'react-router-dom';
import TodoIndex from './pages/todo-index/TodoIndex';
import TodoUpsert from './pages/todo-upsert/TodoUpsert';
import TodoComponent from './TodoComponent';

const TodoRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<TodoComponent></TodoComponent>}>
				<Route path='/' element={<TodoIndex />} />

				<Route path='/create' element={<TodoUpsert />} />
				<Route path='/update/:id' element={<TodoUpsert />} />
			</Route>
		</Routes>
	);
};

export default TodoRouter;
