import React, { useState } from 'react';

import './App.css';

const App = () => {
  const [inputDescription, setInputDescription] = useState("");
  const [todoList, setTodoList] = useState<String[]>([]);

  const handleChange = (event: any) => {
    setInputDescription(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent) => {
    setTodoList(previousState => [...previousState, inputDescription]);
    setInputDescription("");
    event.preventDefault();
  }

  return (
    <main className='App'>
      <h1>to-do list</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <h2>Adicione uma nova tarefa</h2>

          <div>
            <label htmlFor="description">Descrição</label>
            <input type="text" name="description" placeholder='Informe uma descrição' value={inputDescription} onChange={handleChange} />
          </div>

          <button type="submit">Adicionar</button>
        </form>

        <section>
          <h2>Afazeres</h2>

          <ul>
            {!todoList.length ? (
              <li>
                Nenhuma Atividade Registrada!
              </li>
            ) : (
              todoList.map((todo, index) => (
                <li>
                  <input type="checkbox" name={`${todo}-${index}`} />
                  <label htmlFor={`${todo}-index`}>{todo}</label>
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
