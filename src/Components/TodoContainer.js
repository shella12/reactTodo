import React, { useEffect, useState } from "react"
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodoList from "./TodosList";
import { v4 as uuidv4 } from "uuid";

const TodoContainer = () => {
  const [state, setState] = useState((JSON.parse(localStorage.getItem("state"))||{todos:[]}))

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(state)
    localStorage.setItem("state", temp)
  }, [state])

  const changeHandler = (id) => {
    setState({
      todos: state.todos.map(todo => {
        if(id===todo.id){
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      })
    });
  }
  const deleteTodo = id => {
    setState({
      todos: state.todos.filter(todo => id!==todo.id)
    })
  };

  const inputTodo = newTodo => {
    setState({
      todos: [
        ...state.todos,
        {
          id: uuidv4(),
          title: newTodo,
          completed: false,
        }
      ]
    });
  };
 const setUpdate = (updatedTitle, id) => {
  setState({
    todos: state.todos.map(todo => {
      if (todo.id === id) {
        todo.title = updatedTitle
      }
      return todo
    }),
  })
}
  return (
    <div className="inner">
      <Header />
      <InputTodo inputTodo={inputTodo}/>
      <TodoList 
      todos={state.todos}
       changeHandler={changeHandler} 
       deleteTodo={deleteTodo}
       setUpdate={setUpdate}/>
    </div>
  )

}
export default TodoContainer;