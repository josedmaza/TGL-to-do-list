import './App.css';
import TaskList from './components/TaskList';
import teamLogo from './imagenes/logo.jpg'




function App() {
  return (
    <div className="to-do-list">
      <nav className='navbar'>
        <img src={teamLogo}/>
      </nav>
      <section className='main-task'>
        <h2>TopGunLab To Do List</h2>
        <TaskList/>
        
      </section>
      
      
    </div>
  );
}

export default App;
