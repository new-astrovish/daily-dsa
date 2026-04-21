// Given an array of todo objects [{id, title, completed}], 
// return only the ones where done is false. Use .filter().

import allTodos from "./data/todos.json" with { type: 'json' };

const todos = allTodos.todos;

function filterActiveTodos(todos) {
    return todos.filter(todo => todo.completed !== true);
}

console.log(filterActiveTodos(todos), 'Inactive todos <-------');
