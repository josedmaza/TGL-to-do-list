import "./App.css";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="to-do-list">
      <nav className="navbar"></nav>
      <section className="main-task">
        <h2>TopGunLab To Do List</h2>
        <TaskList />
      </section>
    </div>
  );
}

export default App;
