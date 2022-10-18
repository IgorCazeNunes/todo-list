import './styles.css';

const Historic = () => {
    return (
        <section className="historic">
            <div>
                <h2>Histórico</h2>

                <button
                    type="button"
                    className="btn-delete"
                    onClick={(event) => event.preventDefault()}
                >
                    Limpar Histórico
                </button>
            </div>

            <ul>
                <li>
                    Todo-1
                </li>

                <li>
                    Todo-2
                </li>

                <li>
                    Todo-3
                </li>
            </ul>
        </section>
    );
}

export default Historic;
