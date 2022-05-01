
import './App.css';
import React from 'react';
import { Outlet} from 'react-router-dom';
import ResponsiveAppBar from './components/responsiveAppBar';



function App() {

  const pages = ["Home", "Projects", "About Me"];

  return (
    <div>
      <ResponsiveAppBar pages={pages} />
      <Outlet />
    </div>
  )
}

// {/* <div>
// {/* This is where your header should go */}
// <div id='navigation-bar'>
//   <h1>Jeff's Website</h1>
//   <Link to="/">Home</Link>
//   <Link to='/about'>About</Link>
//   <Link to='/projects'>Projects</Link>
// </div>


// </div> */}

export default App;