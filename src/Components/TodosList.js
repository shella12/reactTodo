import TodoItem from "./TodoItem";

const TodoList = (props) => {
    return (
        <ul>
          {props.todos.map((todo) => (
          <TodoItem 
          key={todo.id}
          todo={todo} 
          changeHandler={props.changeHandler} 
          deleteTodo={props.deleteTodo}
          setUpdate={props.setUpdate}/>))}
        </ul>
      )
}

export default TodoList;