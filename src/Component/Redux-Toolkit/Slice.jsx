import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos:[],
  visibleTodos:[]
};

const todoslices = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add(state, action) {
     if(action.payload.title.length === 0){
      alert("please enter valid details.")
     } else if( action.payload.notes.length === 0){
      alert("please enter valid details.")
     }
     
     
     else {
      state.todos.push(action.payload);
     }
      state.visibleTodos=state.todos;
    },

    remove(state, action) {
      state.todos=state.todos.filter((item, index) => index !== action.payload);
      state.visibleTodos=state.todos;
    },
    searchTodos(state, action) {
    state.visibleTodos =  state.todos.filter(todo => todo.title.toLowerCase().includes(action.payload.toLowerCase()));
    },
    clearSearch(state){
      state.visibleTodos=state.todos;
    }

  },
});

export default todoslices.reducer;
export const { add, remove, searchTodos,clearSearch } = todoslices.actions;
