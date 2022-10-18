import './styles.css';

const Form = () => {
    return (
        <form className="form" onSubmit={(event) => event.preventDefault()}>
            <h2>Adicione uma nova tarefa</h2>

            <div>
                <label htmlFor="description">Descrição</label>

                <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Informe uma descrição"
                />
            </div>

            <button type="submit">Adicionar</button>
        </form>
    );
}

export default Form;
