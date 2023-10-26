import { createSlice } from '@reduxjs/toolkit';
import { todoList } from '../utils/initialTodoList';

const initialState={
  todoList: todoList
}

const todoSlice = createSlice({
  name:'todo',
  initialState,
  reducers :{
    addToDo:(state,action)=>{
      state.todoList.push(action.payload)
    },
     removeToDo:(state,action)=>{
       state.todoList=state.todoList.filter((todo)=>todo.id!==action.payload);
    },
    editToDo:(state,action)=>{
      state.todoList = state.todoList
      .map((todo)=>{
        if(todo.id===action.payload.id){
          todo.value=action.payload.value
          
        }
        return todo;
      })
    }
  }
});

export const { addToDo ,removeToDo,editToDo} = todoSlice.actions;
export default todoSlice.reducer;