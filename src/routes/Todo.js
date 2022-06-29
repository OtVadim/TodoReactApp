import { useState } from 'react'
import styles from './Todo.module.css'
import AddItemForm from '../components/AddItemForm'
import TodoItem from '../components/TodoItem'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, completeItem, deleteItem } from '../features/todo/todoSlice'



function Todo() {
  const items = useSelector((state) => state.todo)
  const dispatch = useDispatch()

  const handleSubmit = (title) => {
    const newItem = {
      id: items.length,
      title,
      completed: false,
    }
    dispatch(addItem(newItem))
  }

  const handleItemComplete = (item) => {
    dispatch(completeItem(item))
  }

  const handleItemDelete = (item) => {
    dispatch(deleteItem(item))

  }



  return (
    <div className={styles.container}>
      <AddItemForm onSubmit={handleSubmit} />
      {items.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onComplete={() => handleItemComplete(item)}
          onDelete={() => handleItemDelete(item)}
        />
      ))}
    </div>
  )
}

export default Todo
