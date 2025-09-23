import { useAppSelector } from "@/app/redux";
import { useGetTasksQuery } from "@/state/api";
import React from "react";

type Props = {
  id:string;
  setIsModalNewTaskOpen: (isOpen: boolean) => void;
};

const TableView = ({id, setIsModalNewTaskOpen}: Props) => {
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  const {
    data: tasks,
    error,
    isLoading,
  } = useGetTasksQuery({ projectId: Number(id)});

  if (isLoading) return <div>Loading...</div>;
  if (error || !tasks) return <div>An error occurred while fetching taskss</div>;
  return    <div>TableView</div>
  
};

export default TableView;