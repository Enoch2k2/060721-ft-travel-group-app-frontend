
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/foundation/Navbar';
import Home from './components/foundation/Home';
import PointOfInterestDetails from './components/POI/PointOfInterestDetails';
import PointOfInterestForm from './components/POI/PointOfInterestForm';


const App = () => {
  return (
<div className='container inset-0 flex 
   box-shadow-md  
'>


    <Router>
        <Navbar />
        {/* <div className="h-screen w-screen overflow-y-scroll overscroll-y-contain bg-blue-50"> */}
          <Switch>
            <Route path='/pointsofinterests/:id'>
              <PointOfInterestDetails />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
          
            <Route exact path='/new'>
              <PointOfInterestForm />
            </Route> 
             <Route path='/'>
              <h1>this page does not exist</h1>
            </Route>
          </Switch>
        {/* </div> */}

    </Router>
</div>

  );
}

export default App;
