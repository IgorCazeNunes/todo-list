import { useEffect, useState } from 'react';

import { ITodo } from '../../common/interfaces';
import { Form, Historic, TodoList } from '../../components';
import { localLoad, localSave } from '../../util/localStorage';

import './styles.css';

const TODO_LOCAL_STORAGE = "Todo-List"
const HISTORIC_LOCAL_STORAGE = "Todo-Historic";

const Home = () => {
	const [historicList, setHistoricList] = useState<string[]>(localLoad(HISTORIC_LOCAL_STORAGE) || [])
	const [todoList, setTodoList] = useState<ITodo[]>(localLoad(TODO_LOCAL_STORAGE) || []);
	const [totalItems, setTotalItems] = useState(0);

	useEffect(() => {
		localSave(HISTORIC_LOCAL_STORAGE, historicList);
	}, [historicList])

	useEffect(() => {
		setTotalItems(todoList.length);
		localSave(TODO_LOCAL_STORAGE, todoList);
	}, [todoList]);

	return (
		<div>
			<div className="container">
				<Form setTodoList={setTodoList} />

				<Historic historicList={historicList} setHistoricList={setHistoricList} />
			</div>

			<TodoList 
				todoList={todoList} 
				setTodoList={setTodoList} 
				setHistoricList={setHistoricList}
				totalItems={totalItems} 
			/>
		</div>
	);
}

export default Home;
