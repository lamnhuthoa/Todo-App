import { createSlice } from '@reduxjs/toolkit';

const getInitialTodo = () => {
    const localTodoList = window.localStorage.getItem('todos');
    if(localTodoList) {
        return JSON.parse(localTodoList);
    }
    window.localStorage.setItem('todos', JSON.stringify([]));
    return [];
}

const initialValue = {
    todos: getInitialTodo(),
};

export default createSlice({
    name: 'todoList',
    initialState: initialValue.todos,
    reducers: {
        addTodo: (state, action) => {
            //mutation || IMMER
            state.push(action.payload)
            const todoList = window.localStorage.getItem('todos');
            if(todoList) {
                const todoListArray = JSON.parse(todoList);
                todoListArray.push({...action.payload});
                window.localStorage.setItem('todos', JSON.stringify(todoListArray));
            } else {
                window.localStorage.setItem('todos', JSON.stringify([{...action.payload}]));
            }
        },
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload);
            if(currentTodo) {
                currentTodo.completed = !currentTodo.completed;
                window.localStorage.setItem('todos', JSON.stringify([...state]));
            }
        },
        deleteTodo: (state, action) => {
            const updatedTodoList = state.filter(todo => todo.id !== action.payload);
            window.localStorage.setItem('todos', JSON.stringify([...updatedTodoList]));
            return updatedTodoList;
        }
    }
})