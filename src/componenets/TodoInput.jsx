function TodoInput({ onChange, onClick, value }) {
    return (
        <>
            <h1 className='font-bold text-3xl'>Todo App</h1>
            <div className='my-6'>
                <input onChange={onChange} value={value} className='border rounded-sm p-2 w-10/12' type="text" placeholder='Add Todo' />
                <button onClick={onClick} className='p-2 px-3 ml-2 rounded-sm bg-teal-200'>Add</button>
            </div>
        </>
    )
}

export default TodoInput;