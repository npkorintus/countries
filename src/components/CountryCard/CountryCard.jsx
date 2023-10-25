import React from 'react';

const CountryCard = ({ country }) => {
  return (
    <div
      class="grid-item"
      style={{
        border: '1px solid black',
        // height: '300px'
      }}
      // onClick={window.alert('go to country detail page'
    >
      <div>
        <img alt={`${country.name.common} flag`} src={country.flags.png}
          style={{
            // float: 'left',
            // width: '100px',
            // height: '100px',
            height: '120px'
            // objectFit: 'cover'
          }} />
      </div>
      <p style={{ fontWeight: 'bold' }}>{country.name.official}</p>
      <p><span style={{ fontWeight: 'bold' }}>Population: </span>{country.population.toLocaleString("en-US")}</p>
      <p><span style={{ fontWeight: 'bold' }}>Region: </span>{country.region}</p>
      <p><span style={{ fontWeight: 'bold' }}>Capital: </span>{country.capital}</p>
    </div>
  )
}

export default CountryCard;
