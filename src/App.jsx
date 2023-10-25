import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { CountryAPI } from './api/CountryAPI'
import useFetch from './hooks/useFetch'

import CountryCard from './components/CountryCard/CountryCard'

function App() {
  const [count, setCount] = useState(0)
  const [countryList, setCountryList] = useState();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  // console.log('countries: ', countries)
  // console.log('countryList: ', countryList)
  console.log('search: ', search)
  console.log('selectedRegion: ', selectedRegion)

  // useEffect(() => {
  //   CountryAPI.getAll().then((response) => {
  //     setCountryList(response.data)
  //     // console.log('response: ', response)
  //     // console.log('countryList: ', countryList)
  //   })

  // }, [])

  // const [countries] = useFetch('https://restcountries.com/v3.1/all');

  const handleSelect = (e) => {
    e.preventDefault();
    // console.log('e: ', e)
    setSelectedRegion(e.target.value)
  }

  useEffect(() => {
    const url = `https://restcountries.com/v3.1/all`;

    const fetchData = async() => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setCountries(data);
      } catch(error) {
        console.error('Error: ', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const url = search ? `https://restcountries.com/v3.1/name/${search}` : `https://restcountries.com/v3.1/all`;

    const fetchData = async() => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setCountries(data);
      } catch(error) {
        console.error('Error: ', error)
      }
    };

    fetchData();
  }, [search]);

  useEffect(() => {
    console.log('search by region')
    const url = selectedRegion ? `https://restcountries.com/v3.1/region/${selectedRegion}` : `https://restcountries.com/v3.1/all`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log('json: ', json)
        setCountries(json);
      } catch (error) {
        console.error('Error: ', error)
      }
    };

    fetchData();
  }, [selectedRegion])


  return (
    <>
      <h1>Where in the World</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          margin: '24px '
        }}
      >
        <input placeholder="Search for a country" value={search} onChange={(e) => setSearch(e.target.value)} />
        <select name="region-select" value={selectedRegion} onChange={handleSelect}>
          <option value="">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      {/* {countryList.map(country =>
        <div>{country.name.official}</div>
      )} */}
      <div class="grid-container">

        {countries && countries.map(country => {
          return <CountryCard key={country.cca3} country={country} />
        })}
      </div>
    </>
  )
}

export default App
