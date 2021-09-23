import React from "react"
import QueryContextProvider from "./Context"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "@apollo/react-hooks"
import Child from "./components/Child"
import "./styles.css"

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <QueryContextProvider>
        <Child />
      </QueryContextProvider>
    </ApolloProvider>
  )
}

export default App
