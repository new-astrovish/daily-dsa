// From a todos array, return an object { active: N, completed: N } using .reduce().

import allTodos from "./data/todos.json" with { type: 'json' };

const todos = allTodos.todos;

function countByStatus() {
    // let output = { active: 0, completed: 0 };

    const counts = todos.reduce((acc, todo) => {
        return {
            active: acc.active + todo.active,
            completed: acc.completed + todo.completed
        }
    });

    console.log(counts, "<-------")
    return counts;
}


console.log(countByStatus(), 'Inactive todos <-------');
