import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';

const  App= ()=> {
  return (
     <Router>
       <Navbar/>
       <Switch>
         <Route to='/' exact>
           <Home/>
         </Route>
         <Route to='/pointsofinterests/:id'>

         </Route>

       </Switch>
     </Router>
  );
}

export default App;
