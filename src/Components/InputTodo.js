import { useState } from "react";

const InputTodo = (props) => {
    const [title,setTitle]=useState('');
    const onClickHandler = (event) => {
        event.preventDefault();
        if(title.trim()){
            props.inputTodo(title);
            setTitle('');
        }
        else {
            alert("Please enter input")
        }
      };
    return (
        <form className="form-container">
          <input className="input-text" type="text" placeholder="Add Todo..." value={title} onChange={(e) => setTitle(e.target.value)}/>
          <button className="input-submit" type="submit" onClick={(e)=>onClickHandler(e)}>Submit</button>
        </form>
      );
}

export default InputTodo;