import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import RoutesComp from './Routes/RoutesComp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <RoutesComp />
      </BrowserRouter>
    </div>
  );
}

export default App;