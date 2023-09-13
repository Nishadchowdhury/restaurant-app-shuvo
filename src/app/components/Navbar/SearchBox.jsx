"use client"

import { useEffect, useState } from "react"
import Input from "../Inputs/Input";

function SearchBox() {

    const [searching, setSearching] = useState(false);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        console.log(searchText)
    }, [searchText])


    return (
        <>
            <div class=" relative flex rounded-md shadow-sm w-[30%] border-[1px] text-black border-white" >
                <Input
                    value={searchText}
                    placeholder={"Find cuisines"}
                    change={setSearchText}
                />
                <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
                    <svg class="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </div>
                <button type="button" class="py-3 px-4 inline-flex flex-shrink-0 justify-center items-center gap-2 rounded-r-md border border-transparent font-semibold bg-coffee text-white hover:bg-opacity-50 transition-all text-sm">

                    {searching && <span class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading">
                        <span class="sr-only">Loading...</span>
                    </span>}

                    Search
                </button>
            </div>
        </>

    )
}
export default SearchBox