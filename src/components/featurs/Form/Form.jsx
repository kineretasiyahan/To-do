import { useEffect,useState } from "react";
import { v4 as uuidv4 } from "uuid";
import './form.css'

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  useEffect(()=>{
    if(editTodo){
      setInput(editTodo.title)
    }
    else{setInput("")}
  },[setInput,editTodo])
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => 
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };
  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
        className="input-todo"
          type="text"
          placeholder="Write your todo ..."
          value={input}
          onChange={onInputChange}
        ></input>
        <button className="button-todo" type="submit">{editTodo?"OK":"ADD"}</button>
      </form>
    </div>
  );
};
export default Form;
