import { useState } from 'react';

import { IForm } from '../../common/interfaces';

import './index.css';

const Form = ({ todoList, setTodoList }: IForm) => {
    const [inputDescription, setInputDescription] = useState<string>("");
    const [formError, setFormError] = useState<string>("");

    const onInputChange = (event: any) => {
        setInputDescription(event.target.value);
    }

    const isFormValid = () => {
        if (!inputDescription) {
            setFormError(`O campo nāo pode estar vazio.`);
            return false;
        }

        return true
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!isFormValid()) {
            return;
        }

        const updatedTodoList = [...todoList, {
            description: inputDescription,
            checked: false
        }];

        setTodoList(updatedTodoList);

        setInputDescription("");
        setFormError("");
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <h2>Adicione uma nova tarefa</h2>

            <div>
                <label htmlFor="description">Descrição</label>
                <input
                    type="text"
                    name="description"
                    placeholder='Informe uma descrição'
                    value={inputDescription}
                    onChange={onInputChange}
                />
                {formError && (<span>{formError}</span>)}
            </div>

            <button type="submit">Adicionar</button>
        </form>
    );
}

export default Form;
