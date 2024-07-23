import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
import Counter from "./Counter";

function App() {
  return (
    <ErrorBoundary>
      <h1>Monitoring Exercise</h1>
      <Counter />
    </ErrorBoundary>
  );
}

export default App;
