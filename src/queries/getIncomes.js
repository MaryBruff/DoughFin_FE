import { gql } from "@apollo/client";

export const GET_INCOMES = gql`
query GetIncomes($email: String!) {
  user(email: $email) {
      currentIncomes {
          amount
          pctChange
      }
  }
}`