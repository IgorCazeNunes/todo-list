import { Form, Historic, TodoList } from '../../components';

import './styles.css';

const Home = () => {
	return (
		<div>
			<div className="container">
				<Form />

				<Historic />
			</div>

			<TodoList />
		</div>
	);
}

export default Home;
