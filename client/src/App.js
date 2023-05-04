import './App.css';
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';
import Form from './views/Form/Form';
import NatBar from './components/NatBar/NavBar';
import {Route} from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function App() {
  const location=useLocation()
  return (
    <div className="App">
      {location.pathname!=="/" && <NatBar/>}
      <Route exact path="/" render={()=><Landing/>}/>
      <Route  path="/Home" render={()=><Home/>}/>
      <Route  path="/Detail" render={()=><Detail/>}/>
      <Route  path="/Form" render={()=><Form/>}/>
    </div>
  );
}

export default App;
