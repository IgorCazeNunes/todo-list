import { useEffect, useState } from 'react';

import Form from '../../components/Form';
import Historic from '../../components/Historic';
import TodoList from '../../components/TodoList';

import { TODO_LOCAL_STORAGE } from '../../common/constants';
import { localLoad, localSave } from '../../util/localStorage';

const Home = () => {
    const [todoList, setTodoList] = useState(localLoad(TODO_LOCAL_STORAGE) || []);

    useEffect(() => {
        localSave(TODO_LOCAL_STORAGE, todoList);
    }, [todoList]);

    return (
        <div>
            <div className="container">
                <Form 
                    setTodoList={setTodoList} 
                />

                <Historic />
            </div>

            <TodoList todoList={todoList} setTodoList={setTodoList} />
        </div>
    );
}

export default Home;