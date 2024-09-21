import PropTypes from "prop-types";
import { useState } from "react";
import Styles from "./styles.module.css";

const TodoItem = ({ item, onDelete, onEdit }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState(item.name);
  const [editCategory, setEditCategory] = useState(item.category);

  const handleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  const handleDeleteItem = () => {
    onDelete(item);
  }

  const handleEditItem = () => {
    setIsEditing(!isEditing);
  }

  const handleSaveItem = () => {
    onEdit(item, { name: editItem, category: editCategory });
    setIsEditing(false);
  }

  return (
    <li className={Styles.itemList} style={{ color: isCompleted ? "green" : "black"}}>
      {isEditing ? (
        <>
          <input type="text" value={editItem} onChange={(e) => setEditItem(e.target.value)} />
          <select value={editCategory} onChange={(e) => setEditCategory(e.target.value)}>
            <option value="school">School</option>
            <option value="food">Food</option>
            <option value="work">Work</option>
          </select>
        </>
      ) : (
        <>
          {item.name} ({item.category})
        </>
      )}
      <button onClick={handleComplete}>
        {isCompleted ? "Desmarcar" : "Concluir"}
      </button>
      <button onClick={handleEditItem}>Editar</button>
      {isEditing && <button onClick={handleSaveItem}>Salvar</button>}
      <button onClick={handleDeleteItem}>
        Excluir
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  item: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default TodoItem;
