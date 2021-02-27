import {useEffect} from 'react'
import axios from 'axios';


const Country = ({countryData, weatherData ,setWeatherData}) => {


    useEffect(() => { 
        const weatherApiEndpoint = 'http://api.weatherstack.com';
        const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
        axios
            .get(weatherApiEndpoint+ `/current?access_key=${weatherApiKey}&query=${countryData.capital}`)
            .then(response=>{
            setWeatherData(response.data.current);
            // console.log(response.data.current);
            })
    }, [countryData, setWeatherData]);    

    return(
        <div>
            <h2>{countryData.name}</h2>
            <div>
                <div>Capital: {countryData.capital}</div>
                <div>Population: {countryData.population}</div>
            </div>
            <h3>Languages</h3>
            <div>
                <ul>
                    {countryData.languages.map((language)=><li key={language.iso639_2}>{language.name} </li>)}
                </ul>
            </div>
            <div>
                <img className='flag' src={countryData.flag} alt={countryData.name+' flag'}></img>
            </div>
            <div>
                <h3>Weather in {countryData.capital}</h3>
                <span> Temperature: {weatherData.temperature}&#8451;</span>
                <br/>
                <img className='weather-icon'  src={weatherData.weather_icons[0]} alt='No weather icon available.' />
                <br/>
                <span>Wind: {weatherData.wind_speed} in {weatherData.wind_dir} direction.</span>
            </div>
        </div>
    );
}

export default Country;
