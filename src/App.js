import {Routes, Route} from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';

function App() {
  return (
   <div>
     
      <Navbar/>
  <Routes>
   <Route path='/' element={<Home/>}/>
    <Route path = '/about' element={<About/>}/>
    <Route path ='/order' element={<OrderSummary/>}/>
  </Routes>
   </div>
  );
}

export default App;
