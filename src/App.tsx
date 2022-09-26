import './App.css';

const App = () => {
  return (
    <main className='App'>
      <h1>to-do list</h1>

      <div>
        <form action="">
          <h2>Adicione uma nova tarefa</h2>

          <div>
            <label htmlFor="description">Descrição</label>
            <input type="text" name="description" placeholder='Informe uma descrição' />
          </div>

          <button type="submit">Adicionar</button>
        </form>

        <section>
          <h2>Afazeres</h2>

          <ul>
            <li>
              <input type="checkbox" name="todo1" id="" />
              <label htmlFor="todo1">Lorem ipsum sit amet</label>
            </li>

            <li>
              <input type="checkbox" name="todo2" id="" />
              <label htmlFor="todo2">Lorem ipsum sit amet</label>
            </li>

            <li>
              <input type="checkbox" name="todo3" id="" />
              <label htmlFor="todo3">Lorem ipsum sit amet</label>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default App;
