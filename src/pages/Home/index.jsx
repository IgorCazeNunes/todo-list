import { useState } from 'react';

import Form from '../../components/Form';
import Historic from '../../components/Historic';
import TodoList from '../../components/TodoList'

const Home = () => {
    const [todoList, setTodoList] = useState(["Todo 1", "Todo 2", "Todo 3"]);

    return (
        <div>
            <div className="container">
                <Form 
                    setTodoList={setTodoList} 
                />

                <Historic />
            </div>

            <TodoList todoList={todoList} />
        </div>
    );
}

export default Home;