import { useState, useEffect } from "react";
import TodoList from './TodoList';
import PaginationButtons from './PaginationButtons';

const Pagination = () => {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setFetching(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=10`
      );
      const data = await response.json();
      setFetching(false);
      setTodos(data);

      console.log(response)

      // Calculate total pages based on the total number of todos
      const totalTodos = response.headers.get("X-Total-Count");
      const calculatedTotalPages = Math.ceil(totalTodos / 10); // 10 todos per page
      setTotalPages(calculatedTotalPages);
    };

    // Debounce the fetchData function
    const timeoutId = setTimeout(() => {
      fetchData();
    }, 300); // Adjust the delay as needed

    // Cleanup function to cancel the timeout
    return () => clearTimeout(timeoutId);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='container-sm'>
      <h1>Todos</h1>
      {fetching ? (
        <p>Loading...</p>
      ) : (
        <TodoList todos={todos} />
      )}
      {/* Render pagination component */}
      <PaginationButtons
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Pagination;
