import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoInput from './componenets/TodoInput'
import TodoList from './componenets/TodoList'
import { data } from 'autoprefixer'

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([
    {
      todo: "Criket",
      id: Date.now(),
      completed: false
    }
  ])

  const handelAddTodo = useCallback(() => {
    const todosArr = [...todos, {
      todo,
      id: Date.now(),
      completed: false
    }]
    setTodos([...todosArr])
    setTodo("")
  }, [todo])



  const handelOnDelete = useCallback((id) => {
    const filterArr = todos.filter((data) => data.id !== id)
    setTodos([...filterArr])
  }, [todos])



  return (
    <div className='w-96  mx-auto'>
      <TodoInput
        onChange={(e) => setTodo(e.target.value)}
        onClick={handelAddTodo}
        value={todo}
      />
      <TodoList todos={todos} onDelete={handelOnDelete} />
    </div>
  )
}

export default App
