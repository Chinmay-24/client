"use client";
import { Priority, useGetProjectsQuery, useGetTasksQuery } from "@/state/api";
import React from "react";
import { useAppSelector } from "../redux";

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
            acc [priority as Priority] 
        }
    )
  return <div>HomePage</div>;
  
};

export default HomePage;