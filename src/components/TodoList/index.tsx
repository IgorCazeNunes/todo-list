import { ITodoList } from '../../common/interfaces';

import './index.css';

const TodoList = ({ todoList, setTodoList, totalItems }: ITodoList) => {
    const handleCheck = (changedIndex: number) => {
        const updatedTodoList = todoList.map((todo, index) => {
            if (changedIndex === index) {
                return {
                    ...todo,
                    checked: !todo.checked
                }
            }

            return todo;
        });

        setTodoList(updatedTodoList);
    }

    const handleDeleteAllCheckedTodos = (event: any) => {
        event.preventDefault();
        const updatedTodoList = todoList.filter(todo => !todo.checked);
        setTodoList(updatedTodoList);
    }

    return (
        <section className="todo-list">
            <div>
                <h2>Afazeres</h2>

                <button
                    type="button"
                    className="btn-delete"
                    onClick={(event) => handleDeleteAllCheckedTodos(event)}
                >
                    Deletar Items Finalizados
                </button>
            </div>

            <ul>
                {!todoList.length ? (
                    <li className="warning">
                        Nenhuma Atividade Registrada!
                    </li>
                ) : (
                    todoList.map((todo, index) => (
                        <li key={`${todo.description}-${index}`}>
                            <input
                                readOnly
                                type="checkbox"
                                id={`${todo.description}-${index}`}
                                name={`${todo.description}-${index}`}
                                checked={todo.checked}
                                onClick={() => handleCheck(index)}
                            />
                            <label htmlFor={`${todo.description}-${index}`}>{todo.description}</label>
                        </li>
                    ))
                )}

                <li>
                    Total de items: {totalItems}
                </li>
            </ul>
        </section>
    );
}

export default TodoList;
