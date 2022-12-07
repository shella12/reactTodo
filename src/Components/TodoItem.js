import React, { useState } from "react";
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };
  const [editing, setEditing] = useState(false);
  const { todo, changeHandler, deleteTodo } = props;
  const handleEditing = () => {
    setEditing(true);
  };
  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }
  const handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      setEditing(false);
    }
  };
  return (
    <React.Fragment>
        <li className={styles.item} key={todo.id}>
          <div onDoubleClick={handleEditing} style={viewMode}>
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={todo.completed}
              onChange={() => changeHandler(todo.id)}
            />
            <span style={todo.completed ? completedStyle : null}>
              {todo.title}
            </span>
            <button type="button" onClick={() => deleteTodo(todo.id)}>
              delete
            </button>
          </div>
          <input
              type="text"
              style={editMode}
              className={styles.textInput}
              value={todo.title}
              onChange={(e) => {
                props.setUpdate(e.target.value, todo.id);
              }}
              onKeyDown={handleUpdatedDone}
            />
        </li>
    </React.Fragment>
  );
};

export default TodoItem;
