import React, { createContext } from "react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

export const QueryContext = createContext()

const QueryContextProvider = ({ children }) => {
  const { loading, error, data } = useQuery(gql`
    {
      rates(currency: "USD") {
        currency
        rate
      }
    }
  `)

  return (
    <QueryContext.Provider
      value={{
        loading,
        error,
        data
      }}
    >
      {children}
    </QueryContext.Provider>
  )
}

export default QueryContextProvider
