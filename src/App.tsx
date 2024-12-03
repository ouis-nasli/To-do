import './App.css';
import { Route, Routes } from 'react-router-dom';
import TodoRouter from './module/todo/TodoRouter';

function App() {
	return (
		<Routes>
			<Route path='/*' element={<TodoRouter />} />
		</Routes>
	);
}

export default App;
