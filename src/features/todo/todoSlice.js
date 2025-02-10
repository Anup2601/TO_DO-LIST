//reducer likhna ke liya ha
import { createSlice,nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos:[{id:nanoid(),task:"demo-task",isdone:false}],
  }

  export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
      addTodo:(state,action)=>{
        const newTodo={
            id:nanoid(),
            task:action.payload,
            isdone:false,
        };
        state.todos.push(newTodo); //direct add kar sak te ha(direct mutation)

      },
      deleteTodo:(state,action)=>{
        state.todos= state.todos.filter((todo)=>{todo.id!=action.payload});
      },
      markasDone: (state,action)=>{
        state.todos= state.todos.map=((todo)=>{
            if(todo.id=== action.payload){
                todo.isdone= true;
            }
        });
      },
    },
  });
  export const {addTodo,deleteTodo,markasDone}=todoSlice.actions;
  export default todoSlice.reducer;