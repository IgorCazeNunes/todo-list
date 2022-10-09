  import React, { useEffect, useState } from 'react';

import './App.css';
import Form from './components/Form';

interface ITodo {
  description: string;
  checked: boolean;
}

const App = () => {
  const [todoList, setTodoList] = useState<ITodo[]>(() => JSON.parse(localStorage.getItem(`@Todo-List`) || "[]"));
  const [totalItems, setTotalItems] = useState(0);
  
  const handleSaveLocal = (todoList: ITodo[]) => {
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
    setTodoList(updatedTodoList);
  }

  useEffect(() => {
    setTotalItems(todoList.length);
    handleSaveLocal(todoList);
  }, [todoList]);

  return (
    <main className='App'>
      <h1>to-do list</h1>

      <div>
        <Form todoList={todoList} setTodoList={setTodoList} />

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
