"use client";

import React, { useState, use } from 'react';
import ProjectHeader from "@/app/projects/ProjectHeader";
import Board from '../BoardView';
import List from "../ListView";
import Timeline from "../TimelineView";

type Props ={
    params: Promise<{id: string}>;

};
const Project = ({params}:Props) => {
    const {id} = use(params);
    const [activeTab, setActiveTab] = useState("Board");
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

    return(
         <div>
        {/* MODAL NEW TASKS*/}
        <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        {  activeTab === "Board" && (
        <Board id = {id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />)}
        {activeTab === "List" && (
            <List id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
        )}
        {activeTab === "Timeline" && (
            <Timeline id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
        )}
        </div>
    );
    };

export default Project;