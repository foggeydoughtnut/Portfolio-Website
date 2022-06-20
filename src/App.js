
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

export default App;