import { useEffect, useState } from 'react';

import { ITodo } from '../../common/interfaces';
import { Form, TodoList } from '../../components';
import { localLoad, localSave } from '../../util/localStorage';

import './styles.css';

const TODO_LOCAL_STORAGE = "Todo-List"

const Home = () => {
	const [todoList, setTodoList] = useState<ITodo[]>(localLoad(TODO_LOCAL_STORAGE) || "[]");
	const [totalItems, setTotalItems] = useState(0);

	const handleSaveLocal = (todoList: ITodo[]) => {
		localSave(TODO_LOCAL_STORAGE, todoList);
	}

	useEffect(() => {
		setTotalItems(todoList.length);
		handleSaveLocal(todoList);
	}, [todoList]);

	return (
		<div>
			<Form todoList={todoList} setTodoList={setTodoList} />

			<TodoList todoList={todoList} setTodoList={setTodoList} totalItems={totalItems} />
		</div>
	);
}

export default Home;
