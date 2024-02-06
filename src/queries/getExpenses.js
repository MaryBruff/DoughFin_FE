import { gql } from "@apollo/client";

export const GET_EXPENSES = gql`
query GetExpenses($email: String!) {
  user(email: $email) {
      currentExpenses {
          amount
          pctChange
      }
  }
}`