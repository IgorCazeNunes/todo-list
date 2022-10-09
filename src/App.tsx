import { useEffect, useState } from 'react';

import { ITodo } from './common/interfaces';
import { Form, TodoList } from './components';

import './App.css';

const App = () => {
	const [todoList, setTodoList] = useState<ITodo[]>(() => JSON.parse(localStorage.getItem(`@Todo-List`) || "[]"));
	const [totalItems, setTotalItems] = useState(0);

	const handleSaveLocal = (todoList: ITodo[]) => {
		localStorage.setItem(`@Todo-List`, JSON.stringify(todoList));
	}

	useEffect(() => {
		setTotalItems(todoList.length);
		handleSaveLocal(todoList);
	}, [todoList]);

	return (
		<main className='App'>
			<h1>to-do list</h1>

			<div>
				<Form todoList={todoList} setTodoList={setTodoList} />

				<TodoList todoList={todoList} setTodoList={setTodoList} totalItems={totalItems} />
			</div>
		</main>
	);
}

export default App;
