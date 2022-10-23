import { useState } from 'react';

import './styles.css';

const Form = ({setTodoList}) => {
    const [descricao, setDescricao] = useState('');

    const tratarAlteracao = (valor) => {
        setDescricao(valor);
    };

    const tratarFormulario = (evento) => {
        evento.preventDefault();

        setTodoList(
            valorAnterior => [
                ...valorAnterior, 
                descricao
            ]
        );
    }

    return (
        <form 
            className="form" 
    onSubmit={(evento) => tratarFormulario(evento)}>
            <h2>Adicione uma nova tarefa</h2>

            <div>
                <label htmlFor="description">Descrição</label>

                <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Informe uma descrição"
                    value={descricao}
                    onChange={(evento) => tratarAlteracao(evento.target.value)}
                />
            </div>

            <button type="submit">Adicionar</button>
        </form>
    )
};

export default Form;