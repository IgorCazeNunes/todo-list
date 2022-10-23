import './styles.css';

const TodoList = ({todoList, setTodoList}) => {
    const tratarMarcacao = (indexMarcado) => {
        const listaAtualizada = todoList.map((todo, index) => {
            if (indexMarcado === index) {
                return {
                    ...todo,
                    marcado: !todo.marcado
                }
            }

            return todo;
        });

        setTodoList(listaAtualizada);
    }

    const tratarDeletarTodos = (evento) => {
        evento.preventDefault();
        const listaAtualizada = todoList.filter((todo) => !todo.marcado);
        setTodoList(listaAtualizada);
    }

    return (
        <section className="todo-list">
            <div>
                <h2>Afazeres</h2>

                <button
                    type="button"
                    className="btn-delete"
                    onClick={(evento) => tratarDeletarTodos(evento)}
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
                    <>
                        {todoList.map((todo, index) => (
                            <li key={`${todo.descricao}-${index}`}>
                                <input
                                    readOnly
                                    type="checkbox"
                                    id={`${todo.descricao}-${index}`}
                                    name={`${todo.descricao}-${index}`}
                                    checked={todo.marcado}
                                    onClick={() => tratarMarcacao(index)}
                                />

                                <label htmlFor={`${todo.descricao}-${index}`}>{todo.descricao}</label>
                            </li>
                        ))}
                    </>
                )}

                <li>
                    Total de items: {todoList.length}
                </li>
            </ul>
        </section>
    )
};

export default TodoList;