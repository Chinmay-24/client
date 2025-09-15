"use client";

import React, { useState, use } from 'react';
import ProjectHeader from "@/app/projects/ProjectHeader";
import Board from '../BoardView';
type Props ={
    params: Promise<{id: string}>;

};
const Project = ({params}:Props) => {
    const {id} = use(params);
    const [activeTab, setActiveTab] = useState("Board");
    const [isModalNewTaskOpen, setisModalNewTaskOpen] = useState(false);

    return(
         <div>
        {/* MODAL NEW TASKS*/}
        <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        {  activeTab === "Board" && (
        <Board id = {id} setIsModalNewTaskOpen={setisModalNewTaskOpen} />)}
        </div>
    );
    };

export default Project;