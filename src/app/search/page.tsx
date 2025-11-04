"use client"
import Header from "@/components/Header";
import { useSearchQuery } from "@/state/api";
import { debounce } from "lodash";
import React, { useEffect, useState } from "react";


const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { data: searchResults, isLoading, isError} = useSearchQuery( searchTerm, {
        skip: searchTerm.length <3,
    });

    const handleSearch = debounce(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setSearchTerm(event.target.value)
        },
        500,
    );

    useEffect(() => {
        return handleSearch.cancel;
    }, [handleSearch.cancel]);
    
    return <div className="p-8">
        <Header name="Search" />
        <div>
            <input type="text" placeholder="Search..." className="w-1/2 rounded border p-3 shadow" onChange={handleSearch} />
        </div>
        <div className="p-5">
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error occured while fetching search results.</p>}
            {}
        </div>
    </div>

};

export default Search;