  import React, { useEffect, useState } from 'react';

import './App.css';

interface ITodo {
  description: string;
  checked: boolean;
}

const App = () => {
  const [totalItems, setTotalItems] = useState(0);
  const [error, setError] = useState<string>("");
  const [inputDescription, setInputDescription] = useState<string>("");
  const [todoList, setTodoList] = useState<ITodo[]>(() => JSON.parse(localStorage.getItem(`@Todo-List`) || "[]"));

  const handleChange = (event: any) => {
    setInputDescription(event.target.value);
  }

  const handleSaveLocalStorage = (todoList: ITodo[]) => {
    localStorage.setItem(`@Todo-List`, JSON.stringify(todoList));
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
    handleSaveLocalStorage(updatedTodoList);
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

    const updatedTodoList = [...todoList, {
      description: inputDescription,
      checked: false
    }];

    handleSaveLocalStorage(updatedTodoList);
    setTodoList(updatedTodoList);

    setInputDescription("");
    setError("");
  }

  useEffect(() => {
    setTotalItems(todoList.length);
  }, [todoList]);

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
              <li className="warning">
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

            <li>
              Total de items: {totalItems}
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default App;
