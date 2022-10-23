import './styles.css';

const TodoList = ({todoList}) => {
    return (
        <section className="todo-list">
            <div>
                <h2>Afazeres</h2>

                <button
                    type="button"
                    className="btn-delete"
                    onClick={(event) => event.preventDefault()}
                >
                    Deletar Items Finalizados
                </button>
            </div>

            <ul>
                {todoList.map((todo, index) => (
                    <li key={`${todo}-${index}`}>
                        <input
                            type="checkbox"
                            id={`${todo}-${index}`}
                            name={`${todo}-${index}`}
                        />

                        <label htmlFor={`${todo}-${index}`}>{todo}</label>
                    </li>
                ))}

                <li>
                    Total de items: {todoList.length}
                </li>
            </ul>
        </section>
    )
};

export default TodoList;