import { gql, useQuery } from "@apollo/client";

export const GET_TRANSACTIONS = gql`
query getTransactions($email: String!) {
  user(email: $email) {
      id
      transactions {
          id
          amount
          date
          vendor
          status
      }
  }
}`

export const useGetTransactions = (email) => {
  const { loading, error, data } = useQuery(GET_TRANSACTIONS, {
    variables: { email: email },
    fetchPolicy: "no-cache",
  });
  let transactionsData = null;
  if (!loading && data) {
    transactionsData = data?.user?.transactions;
  }
  return { loading, error, transactionsData };
};