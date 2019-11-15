
import todosList from "./todos.json";
import { TOGGLE_TODO, CLEAR_COMPLETED_TODOS,DELETE_TODO,ADD_TODO} from "./actions"

const initialState = {
    todos: todosList,
};
const reducer = (state = initialState,action) => {
switch (action.type) {
    case TOGGLE_TODO:
            const newTodoList = state.todos.map(todo => {
                if(todo.id === action.payload) {
          const newTodo = {...todo };
            newTodo.completed = !newTodo.completed
            return newTodo;
                }
          return todo;
              });
          return {todos: newTodoList };
    case ADD_TODO:{
    //  const newTodoList = state.todos.slice();
    //  newTodoList.push(action.payload)
     return {...state, todos: [...state.todos, action.payload] };
    }
    case CLEAR_COMPLETED_TODOS: {
        return {...state, todos: state.todos.filter(todo => todo.completed === false )}
    }
    case DELETE_TODO: {
        return {...state, todos: [...state.todos, action.payload]}
    }
 default:
    return state;
  }
};

export default reducer;