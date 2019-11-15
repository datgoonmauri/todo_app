export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_COMPLETED_TODOS = "CLEAR_COMPLETED_TODOS";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
// {
// type: TOGGLE_TODO,
// payload: "value"
// }
export const toggleTodo = (todoIdToToggle) => {
    return {
        type: TOGGLE_TODO,
        payload: todoIdToToggle
    };
};
export const addTodo = (todoTitle) => {
const newTodo = {
    userId: 1,
    id: Math.floor(Math.random()*100000),
    title: todoTitle,
    completed: false
};
    return {
        type: ADD_TODO,
        payload: newTodo
    }
}

export const clearCompletedTodos = () => { 
    return {
        type: CLEAR_COMPLETED_TODOS

    }
}
    export const deleteTodo = (todoIdToDelete) => {
            return {
             type: DELETE_TODO,
            payload: todoIdToDelete
            }
}