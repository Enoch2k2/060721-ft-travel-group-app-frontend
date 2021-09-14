
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import PointOfInterestDetails from './components/PointOfInterestDetails';

const  App= ()=> {
  return (

     <Router>
       <Navbar/>
       <Switch>
         <Route path='/pointsofinterests/:id'>
            <PointOfInterestDetails />
         </Route>
         <Route exact path='/'>
           <Home/>
         </Route>
       </Switch>
     </Router>

  );
}

export default App;
