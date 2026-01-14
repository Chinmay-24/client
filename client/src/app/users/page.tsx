import { useGetUserQuery } from "@/state/api";
import React from "react";
import { useAppSelector } from "../redux";
import { DataGrid } from "@mui/x-data-grid";

const Users = () => {
  const {data: users, isLoading, isError} = useGetUsersQuery();
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  if (isLoading) return <div> Loading...</div>
  if (isError || !users) return <div>Error fetching users</div>

  return <div className="flex w-full flex-col p-8">
    <Header name="Users" />
    <div style={{height: 650, width:100%}}>
      <DataGrid
        rows={users || []}
        columns={columns}
      />
    </div>
  </div>;
};
export default Users;