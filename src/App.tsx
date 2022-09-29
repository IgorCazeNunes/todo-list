  import React, { useState } from 'react';

import './App.css';

interface ITodo {
  description: string;
  checked: boolean;
}

const App = () => {
  const [error, setError] = useState<string>("");
  const [inputDescription, setInputDescription] = useState<string>("");
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const handleChange = (event: any) => {
    setInputDescription(event.target.value);
  }

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

  const handleValidation = () => {
    if (!inputDescription) {
      setError(`O campo nāo pode estar vazio.`);
      return false;
    }

    return true
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!handleValidation()) {
      return;
    }

    const newTodo: ITodo = {
      description: inputDescription,
      checked: false
    }

    setTodoList(previousState => [...previousState, newTodo]);

    setInputDescription("");
    setError("");
  }

  return (
    <main className='App'>
      <h1>to-do list</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <h2>Adicione uma nova tarefa</h2>

          <div>
            <label htmlFor="description">Descrição</label>
            <input 
              type="text" 
              name="description" 
              placeholder='Informe uma descrição' 
              value={inputDescription} 
              onChange={handleChange} 
            />
            {error && (<span>{error}</span>)}
          </div>

          <button type="submit">Adicionar</button>
        </form>

        <section>
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
              <li>
                Nenhuma Atividade Registrada!
              </li>
            ) : (
              todoList.map((todo, index) => (
                <li key={`${todo.description}-${index}`}>
                  <input 
                    readOnly
                    type="checkbox" 
                    name={`${todo.description}-${index}`} 
                    checked={todo.checked} 
                    onClick={() => handleCheck(index)} 
                  />
                  <label htmlFor={`${todo.description}-${index}`}>{todo.description}</label>
                </li>
                
              ))
            )}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default App;
