import { create } from 'zustand';

export interface ITodo {
	id: number;
	text: string;
	completed: boolean;
}

interface ITodoStore {
	addTodo: (open: ITodo) => void;
	todos: ITodo[];
	updateCompleted: (id: number) => void;
	deleteTodo: (id: number) => void;
	editTodo: (todo: ITodo) => void;
}

export const todoStore = create<ITodoStore>((set) => ({
	todos: [
		{ id: 1, text: 'Training at the Gym', completed: true },
		{ id: 2, text: 'Play Paddle with friends', completed: false },
		{ id: 3, text: 'Burger BBQ with family', completed: false },
	],

	addTodo: (newTodo) =>
		set((state) => {
			const todos = state.todos;
			if (todos.some((todo) => todo.id === newTodo.id)) return { todos };
			return { todos: [...todos, newTodo] };
		}),
	deleteTodo: (id) =>
		set((state) => {
			const todos = state.todos.filter((todo) => todo.id !== id);
			return { todos };
		}),
	updateCompleted: (id) =>
		set((state) => {
			const todos = state.todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
			return { todos };
		}),
	editTodo: (updatedTodo) =>
		set((state) => ({
			todos: state.todos.map((todo) => (todo.id === updatedTodo.id ? { ...todo, text: updatedTodo.text } : todo)),
		})),
}));
