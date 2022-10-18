
import './app.css';

const App = () => (
    <main className='App'>
        {/* Header */}
        <header>
            <h1>React Todo List</h1>
        </header>
        {/* Header */}

        {/* Home */}
        <div>
			<div className="container">
				{/* Form */}
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
				{/* Form */}

				{/* Historic */}
				<section className="historic">
					<div>
						<h2>Histórico</h2>

						<button
							type="button"
							className="btn-delete"
							onClick={(event) => event.preventDefault()}
						>
							Limpar Histórico
						</button>
					</div>

					<ul>
						<li>
							Todo-1
						</li>

						<li>
							Todo-2
						</li>

						<li>
							Todo-3
						</li>
					</ul>
				</section>
				{/* Historic */}
			</div>

			{/* TodoList */}
			<section className="todo-list">
				<div>
					<h2>Afazeres</h2>

					<button
						type="button"
						className="btn-delete"
						onClick={(event) => event.preventDefault()}
					>
						Deletar Items Finalizados
					</button>
				</div>

				<ul>
					<li>
						<input
							type="checkbox"
							id="todo-check-1"
							name="todo-check-1"
						/>

						<label htmlFor="todo-check-1">Todo List 1</label>
					</li>

					<li>
						<input
							type="checkbox"
							id="todo-check-2"
							name="todo-check-2"
						/>

						<label htmlFor="todo-check-2">Todo List 2</label>
					</li>

					<li>
						<input
							type="checkbox"
							id="todo-check-3"
							name="todo-check-3"
						/>

						<label htmlFor="todo-check-3">Todo List 3</label>
					</li>

					<li>
						<input
							type="checkbox"
							id="todo-check-4"
							name="todo-check-4"
						/>

						<label htmlFor="todo-check-4">Todo List 4</label>
					</li>

					<li>
						<input
							type="checkbox"
							id="todo-check-5"
							name="todo-check-5"
						/>

						<label htmlFor="todo-check-5">Todo List 5</label>
					</li>

					<li>
						Total de items: 5
					</li>
				</ul>
			</section>
			{/* TodoList */}
		</div>
        {/* Home */}
    </main>
);

export default App;
