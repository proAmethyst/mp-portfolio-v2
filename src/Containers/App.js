import './Style/App.scss';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Frontpage from './Frontpage';
import Navbar from '../Components/Navbar';
import Story from '../Containers/Story';
import Work from '../Containers/Work';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Frontpage />}/>
        <Route path='/story' element={<Story />} /> 
        <Route path='/work' element={<Work />} /> 
      </Routes>
      

    </div>
  );
}

export default App;
