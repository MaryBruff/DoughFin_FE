import { gql } from "@apollo/client";

export const GET_USERS = gql`
query GetUser($email: String!) {
  user(email: $email) {
      id
      email
      username
    }
  }
`;