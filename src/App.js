import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import {  BrowserRouter ,
  Routes,
  Route,
  } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Routes>
  
          <Route exact path='/create' component={Create} >
       </Route>
          <Route exact path='/read' component={Read} >
          </Route>

        <Route path='/update' component={Update} >
        </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
