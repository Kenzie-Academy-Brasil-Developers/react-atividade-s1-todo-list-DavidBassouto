import "./style.css";
function ToDoList({ toDos, handleTodo }) {
  return (
    <ul className="ul">
      {toDos.map((toDo, index) => (
        <div key={index}>
          <li> {toDo}</li>
          <button onClick={() => handleTodo(toDo)}>Concluir Tarefa</button>
        </div>
      ))}
    </ul>
  );
}

export default ToDoList;
