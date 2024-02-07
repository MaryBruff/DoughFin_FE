import { gql, useQuery } from "@apollo/client";

export const GET_TRANSACTIONS = gql`
query getTransactions($email: String!) {
  user(email: $email) {
      id
      transactions {
          id
          amount
          date
          type
          category
      }
  }
}`

export const useGetTransactions = (email) => {
  const { loading, error, data } = useQuery(GET_TRANSACTIONS, {
    variables: { email: email },
  });
  console.log(data)
  let transactionsData = null;
  if (!loading && data) {
    transactionsData = data?.user?.transactions;
  }
  console.log('transactionsData', transactionsData)
  return { loading, error, transactionsData };
};