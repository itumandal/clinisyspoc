
import './App.css';
import { Routes,Route } from "react-router-dom";
import HomeScreen from './pages/HomeScreen';
import SPMUI from './pages/SPMUI';

function App() {
  return (
    <div className="App">
      <Routes>
      {/* <Route path='/login' Component={<></>}/> */}
      <Route path='/' Component={HomeScreen} />
      <Route path='/homescreen/spmui' Component={SPMUI} />
      {/* <Route path='/homescreen/configpage' Component={<div>Hello World</div>} /> */}

      
      </Routes>
    </div>
  );
}

export default App;
