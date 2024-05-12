const TodoList = ({ todos }) => {
  return (
    <ul className='todo-list'>
      {todos?.map((todo) => (
        <li key={todo.id}>
          {todo.id}: {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;