import React from 'react';
// import { Router, Link, Switch } from  'react-router-dom';
import countries from './countries.json'

function CountryDetails(props) {

    let country = countries.find(eachCountry => {
        return eachCountry.cca3 == props.match.params.countryId
    })

    return (
        <div>
            <div><b>Name: </b>{country.name.common}</div>
            <div><b>Capital: </b>{country.capital}</div>
        </div>
    );
}

export default CountryDetails;