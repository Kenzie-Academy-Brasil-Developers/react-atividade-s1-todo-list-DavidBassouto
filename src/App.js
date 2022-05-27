import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const [toDos, setToDos] = useState([]);

  function addToDo(newToDo) {
    setToDos([...toDos, newToDo]);
  }

  function handleTodo(thisToDo) {
    const filteredItens = toDos.filter((item) => item !== thisToDo);
    setToDos(filteredItens);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form addToDo={addToDo} />
        <ToDoList toDos={toDos} handleTodo={handleTodo} />
      </header>
    </div>
  );
}

export default App;
