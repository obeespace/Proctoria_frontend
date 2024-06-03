import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Questions from './components/Questions';
import Prequestions from './components/Prequestions';
import ShowQuestion from './components/ShowQuestion';

function App() {
  return (
    <div>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/login' element={<Signin/>}/>
      <Route path='/questions' element={<Questions/>}/>
      <Route path='/instructions' element={<Prequestions/>}/>
      <Route path='/questions/questiondetails/:id' element={<ShowQuestion/>}/>

      
      {/* <Route path='/create/books' element={<CreateBook/>}/>
      <Route path='/books/edit/:id' element={<EditBook/>}/>
      <Route path='/books/delete/:id' element={<DeleteBooks/>}/> */}
    </Routes>
    </div>
  );
}

export default App;
