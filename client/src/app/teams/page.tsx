"use client";
import { useGetTeamsQuery,  } from "@/state/api";
import React from "react";
import { useAppSelector } from "../redux";
import { DataGrid, GridColDef, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton } from "@mui/x-data-grid";
import Header from "@/components/Header";
import { dataGridClassNames, dataGridSxStyles } from "@/lib/utils";

const CustomToolbar = () => (
  <GridToolbarContainer className="toolbar flex gap-2">
    <GridToolbarFilterButton />
    <GridToolbarExport/>    
  </GridToolbarContainer>
);

const columns: GridColDef[] = [
  { field: "id", headerName: "Team ID", width: 120 },
  { field: "teamName", headerName: "Team name", width: 180 },
  { field: "productOwnerUsername", headerName: "Product Owner", width: 220 },
  { field: "projectManagerUsername", headerName: "Project Manager", width: 220 },
]

const Teams = () => {
  const {data: teams, isLoading, isError} = useGetTeamsQuery();
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  if (isLoading) return <div> Loading...</div>
  if (isError || !teams) return <div>Error fetching teams</div>;

  return ( <div className="flex w-full flex-col p-8">
    <Header name="Teams" />
    <div style={{height: 650, width:"100%"}}>
      <DataGrid
        rows={teams || []}
        columns={columns}
        getRowId={(row) => row.id}
        pagination
        slots={{
          toolbar: CustomToolbar,
        }}
        className={dataGridClassNames}
        sx={dataGridSxStyles(isDarkMode)}
      />
    </div>
  </div>
  );
};
export default Teams;