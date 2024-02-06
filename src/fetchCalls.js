import { useQuery } from "@apollo/client"
import {useState} from "react"
import {GET_USERS} from "../src/queries/getUser"



function FinanceData({ email }) {
  const {loading, error, data } = useQuery(GET_USERS, {
    variables: {email},
  })
  if (loading) return null;
  if (error) return `Error! ${error}`;
   
  const user = data?.user; // Safely access user assuming data may be undefined initially
  console.log(user)
  console.log(data?.user)
  return (
    <div key={user?.id}>
      <h3>{user?.email}</h3>
      <p>{user?.username}</p>
    </div>
  );
}

export default FinanceData;