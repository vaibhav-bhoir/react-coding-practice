import { useState, useEffect } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const abortController = new AbortController();

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?q=${searchTerm}`,
          {
            signal: abortController.signal,
          }
        );
        const data = await response.json();
        setSuggestions(data);
        setLoading(false);
        setNoResults(data.length === 0);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Request aborted");
        } else {
          console.error("Error fetching suggestions:", error);
        }
        setLoading(false);
        setNoResults(true);
      }
    };

    const throttledFetch = setTimeout(() => {
      if (searchTerm.trim() !== "") {
        fetchSuggestions();
      } else {
        setSuggestions([]);
        setNoResults(false);
      }
    }, 300); // Throttle time in milliseconds

    return () => {
      clearTimeout(throttledFetch);
      abortController.abort();
    };
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='container-sm'> 
      <input className="form-control me-2" type="search" placeholder="Search" value={searchTerm} onChange={handleInputChange} aria-label="Search"/>
      {loading ? (
        <div className="mt-3">Loading...</div>
      ) : (
        <>
          {noResults ? (
            <div className="mt-3">No results found</div>
          ) : (
            <ul className="mt-3">
              {suggestions.map((suggestion) => (
                <li key={suggestion.id}>{suggestion.title}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default Search;
