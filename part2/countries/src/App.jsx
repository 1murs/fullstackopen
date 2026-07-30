import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const countriesToShow = countries.filter(country =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  )

  const renderCountries = () => {
    if (countriesToShow.length > 10) {
      return <p>Too many matches, specify another filter</p>
    }

    if (countriesToShow.length > 1) {
      return (
        <div>
          {countriesToShow.map(country => (
            <div key={country.cca3}>{country.name.common}</div>
          ))}
        </div>
      )
    }

    if (countriesToShow.length === 1) {
      const country = countriesToShow[0]

      return (
        <div>
          <h1>{country.name.common}</h1>
          <p>capital {country.capital}</p>
          <p>area {country.area}</p>

          <h3>languages:</h3>
          <ul>
            {Object.values(country.languages).map(language => (
              <li key={language}>{language}</li>
            ))}
          </ul>

          <img src={country.flags.png} alt={country.flags.alt} width="150" />
        </div>
      )
    }

    return null
  }

  return (
    <div>
      <div>
        find countries <input value={filter} onChange={handleFilterChange} />
      </div>

      {renderCountries()}
    </div>
  )
}

export default App