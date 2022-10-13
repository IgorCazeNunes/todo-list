import { ChangeEvent, useState } from 'react';

import { IForm } from '../../common/interfaces';

import './styles.css';

const Form = ({ setTodoList }: IForm) => {
    const [inputDescription, setInputDescription] = useState<string>("");
    const [formError, setFormError] = useState<string>("");

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
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

        setTodoList(previous => [...previous, {
            description: inputDescription,
            checked: false
        }]);

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
                    id="description"
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
