"use client"
import React from 'react';
import { useAppSelector } from '../redux';

type TaskTypeItems = "task" | "milestone" | "project";


const Timeline = () => {
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode)
    const {data: projects, }
  return (
    <div>page</div>
  )
}

export default
