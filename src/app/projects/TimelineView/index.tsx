import { useAppSelector } from '@/app/redux';
import { useGetTasksQuery } from '@/state/api';
import { DisplayOption } from "gantt-task-react";
import React, { useMemo, useState } from 'react'

type Props = {
    id: string;
    setIsModalNewTaskOpen: (isOpen: boolean) => void;
};

type TaskTypeItems ="task" | "milestone" | "project" 

const Timeline = ({ id, setIsModalNewTaskOpen }: Props) => {
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
    const {
        data: tasks,
        error,
        isLoading,
    } = useGetTasksQuery({ projectId: Number(id)});

    const [displayOptions, setDisplayOptions] = useState<DisplayOptions>({
        viewmode: ViewMode.Month,
        locale: "en-US"

    })

    const ganttTasks = useMemo(() => {
        return (
            tasks?.map((task) => ({
                start: new Date(task.startDate as string)
                end: new Date(task.dueDate)

            }))

        )
    }
    )

  return 
    <div>Timeline</div>
  
};

export default Timeline;