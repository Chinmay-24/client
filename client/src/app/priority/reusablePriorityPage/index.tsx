"use client"
import { Priority, useGetTasksByUserQuery } from '@/state/api'
import React, { useState } from 'react'

type Props = {
    [priority: Priority]
};

const index = ({priority}: Props) => {
    const [view, setView ] = useState("list");
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

    const userId =1;
    const {data: task, isLoading, isError: isTasksError} = useGetTasksByUserQuery(1, {
        skip: userId ===null
    })
  return 
    <div>index</div>
  
};

export default index