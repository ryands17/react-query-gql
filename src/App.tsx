import React from 'react'
import { useFetchCountriesQuery } from './generated/queries'

function App() {
  const { data, isLoading } = useFetchCountriesQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div className="m-4">
      <h1 className="text-2xl font-bold">Countries:</h1>
      <ul>
        {data?.countries.slice(0, 20).map((country) => (
          <li key={country.name} className="pb-2">
            {country.name} ({country.emoji}) : {country.currency}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
