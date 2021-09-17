
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/foundation/Navbar';
import Home from './components/foundation/Home';
import PointOfInterestDetails from './components/POI/PointOfInterestDetails';
import PointOfInterestForm from './components/POI/PointOfInterestForm';


const App = () => {
  return (

    <Router>

      <div className='flex flex-row overscroll-auto'>
        <Navbar />
        <div className="h-screen w-screen overflow-y-scroll overscroll-y-contain bg-blue-50">
          <Switch>
            <Route path='/pointsofinterests/:id'>
              <PointOfInterestDetails />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/test'>
              <h1>Travelers' Tricks!</h1>
            </Route>
            <Route exact path='/new'>
              <PointOfInterestForm />
            </Route>
          </Switch>
        </div>

      </div>
    </Router>

  );
}

export default App;
