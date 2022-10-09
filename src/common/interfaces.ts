export interface ITodo {
    description: string;
    checked: boolean;
}

export interface IForm {
    todoList: ITodo[];
    setTodoList: (todoList: ITodo[]) => void;
}
