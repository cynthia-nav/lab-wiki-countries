import React from 'react';
import countries from './countries.json'
import {Link} from 'react-router-dom'

function CountriesList(props) {
    return (
        <div>
            {countries.map((country) => {
                return (
                    <li>
                        <Link to={`/country/${country.cca3}`}>{country.name.common}</Link>
                    </li>
                )
            })}
        </div>
    );
}

export default CountriesList;