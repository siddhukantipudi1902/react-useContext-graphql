import React, { useContext } from "react"
import { QueryContext } from "../Context"

const Child = () => {
  const { loading, error, data } = useContext(QueryContext)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ))
}

export default Child
