import "./App.css";
import { TodoList } from "./components/TodoList";
import { useEffect, useState } from "react";

const API = "https://jsonplaceholder.typicode.com/todos/";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTodos = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setTodos(data);
        setLoading(false);
      }
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos(API);
  }, []);

  return (
    <div className="App">
      {loading ? <p>Loading...</p> : <TodoList todos={todos} />}
    </div>
  );
}

export default App;
