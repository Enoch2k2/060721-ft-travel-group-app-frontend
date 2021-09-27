
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/foundation/Navbar';
import Home from './components/foundation/Home';
import PointOfInterestDetails from './components/POI/PointOfInterestDetails';
import PointOfInterestForm from './components/POI/PointOfInterestForm';
import Landing from './components/foundation/Landing';
import Header from './components/foundation/Header';


const App = () => {
  return (
    <>
  


    <Router>
        <Navbar />
          <Switch>
            <Route path='/pointsofinterests/:id'>
              <PointOfInterestDetails />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/landing'>
              <Landing />
            </Route>
          
            <Route exact path='/new'>
              <PointOfInterestForm />
            </Route> 
             <Route path='/'>
              <h1>this page does not exist</h1>
            </Route>
          </Switch>
      

    </Router>

</>

  );
}

export default App;
