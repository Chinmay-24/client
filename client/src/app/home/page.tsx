"use client";
import { Priority, Project, Task, useGetProjectsQuery, useGetTasksQuery } from "@/state/api";
import React from "react";
import { useAppSelector } from "../redux";
import { GridColDef } from "@mui/x-data-grid";

const HomePage = () => {
    const { data: tasks,
            isLoading: tasksLoading, isError: tasksError} = useGetTasksQuery({projectId: parseInt("1")});
    const { data: projects, isLoading: isProjectsLoading} = useGetProjectsQuery();

    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

    if (tasksLoading || isProjectsLoading) return <div> Loading...</div>;
    if (tasksError || !tasks || !projects ) return <div>Error Fecthing Data </div>;

    const  priorityCount = tasks.reduce(
        (acc: Record<string, number>,task: Task) => {
            const {priority} = task;
            acc [priority as Priority] = (acc[priority as Priority] || 0) +1;
            return acc;
        
        },
        {},
    );
    
    const taskDistribution = Object.keys(priorityCount).map((key) => ({
        name: key,
        const: priorityCount[key],
    }));

    const  statusCount = projects.reduce(
        (acc: Record<string, number>,project: Project) => {
            const status = project.endDate ? "Completed" : "Active";
            acc [status] = (acc[status] || 0) +1;
            return acc;
        
        },
        {},
    );
  return <div>HomePage</div>;
  
  const projectStatus = Object.keys(statusCount).map((key) => ({
        name: key,
        const: statusCount[key],
    }));

    const taskColumns: GridColDef[] = [
        {field: "title", headerName: "Title", width: 200}
    ]
};

export default HomePage;