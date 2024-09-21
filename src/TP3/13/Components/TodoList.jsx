import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import Styles from "./styles.module.css";
import { useState } from "react";

export default function TodoList( {items, addItem, deleteTask, editItem, toggleDarkMode, isDarkMode} ) {
  const [createItem, setCreateItem] = useState("");
  const [createCategory, setCreateCategory] = useState("school");

  const handleAddItem = () => {
    addItem({ name: createItem, category: createCategory });
    setCreateItem('');
  }

  return (
    <div className={`${Styles.containerList} ${isDarkMode ? Styles.dark : Styles.light}`}>
      <div className={Styles.containerAdd}>
        <input type="text" value={createItem} onChange={(e) => setCreateItem(e.target.value)} placeholder="Nova Tarefa" />
        <select value={createCategory} onChange={(e) => setCreateCategory(e.target.value)}>
          <option value="escola">Escola</option>
          <option value="food">Comida</option>
          <option value="saude">Saúde</option>
          <option value="trabalho">Trabalho</option>
        </select>
        <button onClick={handleAddItem}>Adicionar</button>
      </div>
      <div className={Styles.containerToggle}>
        <button onClick={toggleDarkMode}>Toggle Dark mode</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <TodoItem key={index} item={item} onDelete={deleteTask} onEdit={editItem}/>
        ))}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  items: PropTypes.array.isRequired,
  addItem: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};
