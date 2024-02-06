import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  gql,
} from "@apollo/client";
import {setContext} from "@apollo/client/link/context"


const httpLink = new HttpLink({
  uri: "https://2a2e2497-8ab5-4226-865f-0cb51ab695c6.mock.pstmn.io/graphql"
})
const customHeaders = setContext((_,{headers}) => {
  return {
    headers: {
      "x-mock-match-request-body": true
    }
  }
})
const client = new ApolloClient({
  // uri: "https://doughfin-be.onrender.com/graphql",
  link: customHeaders.concat(httpLink),
  cache: new InMemoryCache(),
  
});
// client
//   .query({
//     query: gql`
//       query GetUser($email: String!) {
//         user(email: $email) {
//           id
//           email
//           username
//       }
//     }`,
//     variables: {
//       email: "moneybaggins@bigbanktakelilbank.doge"
//     },
//     context: {
//       headers: {
//         "Content-Type": "application/json"
//       }
//     }
//   })
  // .then(result => console.log(result));
  const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
