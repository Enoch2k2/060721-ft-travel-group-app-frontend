
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import PointOfInterestForm from './components/PointOfInterestForm';

const  App= ()=> {
  return (

     <Router>
       <Navbar/>
       <div className="ml-20">
       <Switch>
         <Route exact path='/'>
           <Home/>
         </Route>
         <Route exact path='/test'>
          <h1>Travelers' Tricks!</h1>
         </Route>
         <Route exact path='/new'>
          <PointOfInterestForm />
         </Route>
       </Switch>
        </div>
     </Router>

  );
}

export default App;
