import { Task } from "@/state/api";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";

type Props = {
    task: Task;
};

const TaskCard = ({ task }: Props) => {
  return ( <div className="mb-3 rounded bg-white p-4 shadow dark:bg-dark-secondary dark:text-white">
    {task.attachments && task.attachments.length > 0 && (
        <div>
            <strong>Attachments: </strong>
            <div className="flex flex-wrap">
                {task.attachments && task.attachments.length > 0 && (
                    <Image
                    src={'/${task.attachments[0].fileURL}`}
                    alt={task.attachments[0].fileName}
                    width={400}
                    height={200}
                    className="rounded-md"
                    />
                ) }
                </div>
        </div>
    )}
    <p>
        <strong>ID:</strong> {task.id}
    </p>
    <p>
        <strong>Title:</strong> {task.title}
    </p>
    <p>
        <strong>Descriptrion:</strong>{""} {task.id}
    </p>
    <p>
        <strong>ID:</strong> {task.id}
    </p>
    <p>
        <strong>ID</strong> {task.id}
    </p>
    <p>
        <strong>ID</strong> {task.id}
    </p>
    <p>
        <strong>ID</strong> {task.id}
    </p>
  </div>
  
};

export default TaskCard;