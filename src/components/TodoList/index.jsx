import './styles.css';

const TodoList = ({ 
    todoList, 
    setTodoList,
    setHistoricList, 
    totalItems 
}) => {
    const hasChecked = todoList.some(todo => todo.checked === true);

    const handleCheck = (changedIndex) => {
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

    const handleDeleteAllCheckedTodos = (event) => {
        event.preventDefault();
        const updatedTodoList = todoList.filter(todo => !todo.checked);
        const deletedTodos = todoList.filter(todo => todo.checked).map(todo => todo.description);
        setHistoricList(previous => [...previous, ...deletedTodos]);
        setTodoList(updatedTodoList);
    }

    return (
        <section className="todo-list">
            <div>
                <h2>Afazeres</h2>

                {hasChecked && (
                    <button
                        type="button"
                        className="btn-delete"
                        onClick={handleDeleteAllCheckedTodos}
                    >
                        Deletar Items Finalizados
                    </button>
                )}
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
