import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://doughfin-be.onrender.com/graphql",
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
