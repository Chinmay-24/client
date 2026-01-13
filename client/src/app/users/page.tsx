import { useGetUserQuery } from "@/state/api";
import React from "react";
import { useAppSelector } from "../redux";


const Users = () => {
  const {data: users, isLoading, isError} = useGetUsersQuery();
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  
  return  <div>Users</div>;
  
};

export default Users;