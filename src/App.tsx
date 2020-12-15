import React from 'react'
import { useFetchCountriesQuery } from './generated/queries'

function App() {
  const { data, isLoading } = useFetchCountriesQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <h1>Countries</h1>
      {data?.countries.slice(0, 20).map(country => (
        <li key={country.name}>
          {country.name} ({country.emoji}) : {country.currency}
        </li>
      ))}
    </div>
  )
}

export default App
