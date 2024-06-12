import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchTodos } from "./redux/slice/todoslice";

function App() {
  const Dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log("selector", state);
  if (state.todos.isLoading) {
    return <h1>loading...</h1>;
  }
  return (
    <div className="App">
      <header className="App-header">
        <button
          className="btn"
          onClick={(e) => {
            Dispatch(fetchTodos());
          }}
        >
          fetch data
        </button>
        <div>
          {state.todos.data && state.todos.data.map((e) => <li>{e.title}</li>)}
        </div>
      </header>
    </div>
  );
}

export default App;
