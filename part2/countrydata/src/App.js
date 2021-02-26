import './App.css';
import { useState, useEffect} from 'react';
import axios from 'axios';
import Country from './components/Country';
import Filter from './components/Filter';

function App() {
  const apiEndpoint = 'https://restcountries.eu/rest/v2/all';

  const [allCountries, setAllCountries] =useState([]);
  const [displayCountries, setDisplayCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);


  const searchQueryChange = (event)=> {
    var query = event.target.value;
    setSearchQuery(query);
    var filteredCountries = allCountries.filter(country=> country.name.toLowerCase().includes(query.toLowerCase()));
    setDisplayCountries(filteredCountries);
  }

  useEffect(()=>{
    axios
      .get(apiEndpoint)
      .then(response => setAllCountries(response.data))
  },[]);


  return (
    <div>
      <div>
        <Filter searchQuery={searchQuery} searchQueryChange={searchQueryChange}/>
      </div>
      <div>
        {
          (displayCountries.length>10)?
                <span>Too many matches, specify another filter</span>
                : displayCountries.length !==1?
                      <div>{displayCountries.map(country => <div key={country.numericCode}>{country.name}</div>)} </div>
                      :displayCountries.map((country)=><Country key={country.numericCode} countryData={country}/>)
        
        }
      </div>
    </div>

  );
}

export default App;
