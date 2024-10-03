import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoInput from './componenets/TodoInput'
import TodoList from './componenets/TodoList'

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([
    {
      todo: "Criket",
      id: Date.now(),
      completed: false
    }
  ])

  return (
    <div className='w-96  mx-auto'>
      <TodoInput onChange={(e) => console.log(e.target.value)} onClick={() => console.log("Click On")
      } value={todo} />
      <TodoList todos={todos} />
    </div>
  )
}

export default App
