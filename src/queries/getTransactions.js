import { gql } from "@apollo/client";

export const GET_USER = gql`
query getTransactions($email: String!) {
  user(email: $email) {
      id
      transactions {
          id
          amount
          date
          source
          type
      }
  }
}`