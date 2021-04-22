import './App.css';
import Navbar from './Navbar';
import CountriesList from './CountriesList';
import CountryDetails from './CountryDetails';
import { Route, Link, Switch } from  'react-router-dom'

function App() {
  return (
    <div className="App">
    
     <Navbar/>
     <Link to='/countries'>Country List</Link>
    
     <Switch>
     <Route exact path ='/countries' component={CountriesList} />
       <Route exact path ='/country/:countryId' component ={CountryDetails}/>
     </Switch>
    </div>
  );
}

export default App;
