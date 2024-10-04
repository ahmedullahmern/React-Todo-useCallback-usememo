import { useEffect } from "react";

function TodoList({ todos, onDelete }) {

useEffect(()=>{console.log("hello ahmed kiya hall he ap ka");
},[onDelete])    

    return (
        todos.map((todo) => {
            return (
                <>
                    <div key={todo.id} className='flex my-2  bg-slate-100'>
                        <h3 className='text-2xl font-mono text-left pl-2 py-2 font-medium flex-1'>{todo.todo}</h3>
                        <button
                            onClick={() => onDelete(todo.id)}
                            className='bg-red-200 rounded-sm p-2 px-4'>Delet Todo
                        </button>
                    </div>
                </>
            )
        }))
}


export default TodoList;