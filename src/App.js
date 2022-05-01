
import './App.css';

import { Outlet, Link } from 'react-router-dom';


function App() {
  return (
    <div>
      {/* This is where your header should go */}
      <div id='navigation-bar'>
        <h1>Jeff's Website</h1>
        <Link to="/">Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link>
      </div>

      <Outlet />
    </div>
  );
}

export default App;
