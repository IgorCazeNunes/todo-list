
import Form from '../../components/Form';
import Historic from '../../components/Historic';
import TodoList from '../../components/TodoList'

const Home = () => (
    <div>
        <div className="container">
            <Form />

            <Historic />
        </div>

        <TodoList />
    </div>
)

export default Home;