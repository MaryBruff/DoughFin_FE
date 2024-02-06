import { gql } from "@apollo/client";

export const GET_USER_CASH_FLOW = gql`
query GetUserCashflow($userId: ID!) {
  cashFlow(userId: $userId) {
      username
      years {
          year
          months {
              month
              income
              expenses
          }
      }
  }
}`