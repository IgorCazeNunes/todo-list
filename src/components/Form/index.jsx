import { useState } from 'react';

import './styles.css';

const Form = ({setTodoList}) => {
    const [descricao, setDescricao] = useState('');
    const [error, setError] = useState('');

    const tratarAlteracao = (valor) => {
        setDescricao(valor);
    };

    const tratarFormulario = (evento) => {
        evento.preventDefault();

        if (!descricao) {
            setError("O campo descrição não pode estar vazio, por favor preencha.");
            return;
        }

        setError('');
        setDescricao('');
        setTodoList(
            valorAnterior => [
                ...valorAnterior, 
                {
                    descricao,
                    checked: false
                }
            ]
        );
    }

    return (
        <form 
            className="form" 
            onSubmit={(evento) => tratarFormulario(evento)}
        >
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

                {error && (<span>{error}</span>)}
            </div>

            <button type="submit">Adicionar</button>
        </form>
    )
};

export default Form;