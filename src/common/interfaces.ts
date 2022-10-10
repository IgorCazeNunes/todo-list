import React from "react";

export interface ITodo {
    description: string;
    checked: boolean;
}

export interface IForm {
    setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export interface ITodoList {
    todoList: ITodo[];
    setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>;
    totalItems: number;
}
