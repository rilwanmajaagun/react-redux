import React from 'react';
import './App.css';
import Home from './Component/Home/Home';
import Toolbar from './Component/Toolbar';
import NewCom from './Component/Home/NewCom';
import MovieProvider from './Component/Home/MovieProvider';
import AddMovie from './Component/Home/AddMovie';


function App() {
  return (
    <div className="App">
      {/* <Toolbar/> */}
      {/* <Home/> */}
      <MovieProvider>
        <NewCom></NewCom>
        <AddMovie/>
      </MovieProvider>
      {/* <NewCom/> */}
    </div>
  );
}

export default App;
