import TodoList from "./Components/TodoList";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([
    { name: 'Mercado', category: 'Comida' },
    { name: 'Farmácia', category: 'Saúde' },
    { name: 'Estudos', category: 'Escola' },
    { name: 'Sofrimento [Opcional]', category: 'Trabalho' },
  ]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const addItem = (task) => {
    setItems([...items, task]);
  };
  
  const deleteTask = (task) => { 
    setItems(items.filter((item) => item.name !== task.name));
  }
  
  const editItem = (oldTask, newTask) => {
    const newItems = items.map((item) => 
      item.name === oldTask.name ? newTask : item
    );
    setItems(newItems);
  }  

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return <TodoList items={items} addItem={addItem} deleteTask={deleteTask} editItem={editItem} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>;
}
