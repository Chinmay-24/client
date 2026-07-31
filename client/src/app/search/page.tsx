"use client"
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import TaskCard from "@/components/TaskCard";
import UserCard from "@/components/UserCard";
import { useSearchQuery } from "@/state/api";
import React, { useEffect, useState } from "react";

const Search = () => {
    const [inputValue, setInputValue] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const { data: searchResults, isLoading, isError } = useSearchQuery(searchTerm, {
        skip: searchTerm.length < 3,
    });

    useEffect(() => {
        if (inputValue.trim().length < 3) {
            setSearchTerm("");
            return;
        }

        const timer = window.setTimeout(() => {
            setSearchTerm(inputValue);
        }, 500);

        return () => window.clearTimeout(timer);
    }, [inputValue]);

    return <div className="p-8">
        <Header name="Search" />
        <div>
            <input
                type="text"
                placeholder="Search..."
                className="w-1/2 rounded border p-3 shadow"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
        </div>
        <div className="p-5">
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error occured while fetching search results.</p>}
            {!isLoading && !isError && searchResults && (
                <div>
                    {searchResults.tasks && searchResults.tasks?.length > 0 && (
                        <h2>Tasks</h2>
                    )}
                    {searchResults.tasks?.map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))}

                    {searchResults.projects && searchResults.projects?.length > 0 && (
                        <h2>Projects</h2>
                    )}
                    {searchResults.projects?.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}

                    {searchResults.users && searchResults.users?.length > 0 && (
                        <h2>Users</h2>
                    )}
                    {searchResults.users?.map((user) => (
                        <UserCard key={user.UserId} user={user} />
                    ))}
                </div>
            )}
        </div>
    </div>
};

export default Search;