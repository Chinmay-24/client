import { useAppSelector } from "@/app/redux";
import Header from "@/components/Header";
import { dataGridClassNames, dataGridSxStyles } from "@/lib/utils";
import { useGetTasksQuery } from "@/state/api";
import {DataGrid, GridColDef } from "@mui/x-data-grid"
import React from "react";

type Props = {
  id:string;
  setIsModalNewTaskOpen: (isOpen: boolean) => void;
};

const columns: GridColDef[] = [
  {
    field: "title",
    headerName: "Tile",
    width: 100
  },
  {
    field: "description",
    headerName: "Description",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 130,
    renderCell: (params) => (
      <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
        {params.value}
      </span>
    ),
  },
  {
    field: "priority",
    headerName: "Priority",
    width: 75,
  },
  {
    field: "tags",
    headerName: "Tags",
    width:130,
  },
  {
    field: "startDate",
    headerName: "Start Date",
    width:130,
  },
  {
    field: "dueDate",
    headerName: "Start Date",
    width:130,
  },
  {
    field: "author",
    headerName: "Author",
    width:150,
    renderCell: (params) => params.value.username || "Unknown",
  },
  {
    field: "assignee",
    headerName: "Assignee",
    width:150,
    renderCell: (params) => params.value.username || "Unassigned",
  },


];

const TableView = ({id, setIsModalNewTaskOpen}: Props) => {
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  const {
    data: tasks,
    error,
    isLoading,
  } = useGetTasksQuery({ projectId: Number(id)});

  if (isLoading) return <div>Loading...</div>;
  if (error || !tasks) return <div>An error occurred while fetching taskss</div>;
  return (    <div className="h-[540px] w-full px-4 pb-8 xl:px-6">
    <div className="pt-5">
      <Header name="Table" isSmallText />
    </div>
    <DataGrid 
      rows={tasks || []}
      columns={columns}
      className={dataGridClassNames}
      sx={dataGridSxStyles(isDarkMode)}
      
      />
    <div>
      </div>
  </div>
  );
};

export default TableView;
