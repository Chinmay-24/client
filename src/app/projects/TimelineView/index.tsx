import { useAppSelector } from '@/app/redux';
import { useGetTasksQuery } from '@/state/api';
import { DisplayOption } from "gantt-task-react";
import { type } from 'os';
import React, { useMemo, useState } from "react";

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
                name: task.title
                id: `Task-${task.id}`
                type: "task" as "TaskType",
                progress: task.points ? (task.points /10) * 100 : 0,
                isDisabled: false
            })) || []

        )
    }, [tasks]);

    const handleViewModeChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setDisplayOptions((prev) => ({
            ....prev,
            viewmode: event.target.value as ViewMode,
        }));
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error occured while fetching tasks</div>;


  return 
    <div className="px-4 ">Timeline</div>
  
};

export default Timeline;