import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, saveTodo } from "./slices/todoSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  const { todos, status } = useSelector((state) => state.todos);

  useEffect(() => {
    // on mount
    dispatch(getTodos({ todo: "do something", done: false }));
  }, []);

  switch (status) {
    case "loading":
      return <h1>Loading...</h1>;
    case "succesded":
      return (
        <>
          <button
            onClick={() =>
              dispatch(saveTodo({ title: "do something", done: false }))
            }
          >
            Add Todo
          </button>
          <h1 className="underline bg-slate-400">Todos are :</h1>
          {todos.slice(0, 5).map((todo) => (
            <li>{todo.todo}</li>
          ))}
        </>
      );
    case "failed":
      return <h1>Something went wront</h1>;
    default:
      return <h2>Unexpected Error...</h2>;
  }
}

export default App;
