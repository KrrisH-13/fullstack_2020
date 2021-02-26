const Country = ({countryData}) => {
    return(
        <div>
            <h2>{countryData.name}</h2>

            <div>Capital: {countryData.capital}</div>
            <div>Population: {countryData.population}</div>

            <h3>Languages</h3>
            <ul>
                {countryData.languages.map((language)=><li key={language.iso639_2}>{language.name} </li>)}
            </ul>
            <img className='flag' src={countryData.flag} alt={countryData.name+' flag'}></img>

        </div>
    );
}

export default Country;
