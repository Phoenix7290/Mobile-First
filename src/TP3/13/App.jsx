import TodoList from "./Components/TodoList";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState(['Mercado', 'Farmácia', 'Estudos', 'Sofrimento (Opcional)']);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const addItem = (task) => {
    setItems([...items, task]);
  };

  const deleteTask = (task) => { 
    setItems(items.filter((item) => item !== task));
  }

  const editItem = (task, newTask) => {
    const newItems = items.map((item) => item === task ? newTask : item);
    setItems(newItems);
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return <TodoList items={items} addItem={addItem} deleteTask={deleteTask} editItem={editItem} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>;
}
