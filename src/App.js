import { Route, Routes } from 'react-router-dom';
import './App.css';
import ResponsiveAppBar from './components/headernavi';
/* import Finder from './components/finder';
import Slider  from './components/slider';
import Images from  './components/images';
import { useEffect } from 'react'; */
import Home from './components/home';
import Fav from './components/fav';
//usedispach y selector for to choose and upload data xD

function App() {


  return (
      <div className='App'>
        <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/fav' element= {<Fav/>}/>
        </Routes>
      </div>
    
  );
}

export default App;
