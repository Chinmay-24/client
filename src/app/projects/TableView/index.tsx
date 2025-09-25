import { useAppSelector } from "@/app/redux";
import Header from "@/components/Header";
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
  return (    <div className="h-[540px] w-full px-4 pb-8 xl:px-6">
    <div className="pt-5">
      <Header name="Table" isSmallText />
    </div>
    <DataGrid />
    <div>
      </div>
  </div>
  );
};

export default TableView;
