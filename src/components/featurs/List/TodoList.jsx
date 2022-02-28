import { MdDeleteForever } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { AiOutlineCheckSquare } from "react-icons/ai";
import "./TodoList.css";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const onInputChange = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      {todos.map((todo) => {
        return (
          <li className="li-todo" key={todo.id}>
            <input
              type="text"
              value={todo.title}
              onChange={onInputChange}
              className={todo.completed ? "completed" : "notCompleted"}
            />
            <button className="button-todo">
              <AiOutlineCheckSquare  onClick={() => handleComplete(todo)} />
            </button>
            <button className="button-todo">
              <BiEdit onClick={() => handleEdit(todo)} />
            </button>
            <button className="button-todo">
              <MdDeleteForever onClick={() => handleDelete(todo)} />
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default TodoList;
