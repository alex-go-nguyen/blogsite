import React from 'react';
import { BiSearch } from 'react-icons/bi';

export interface SearchBoxProps {
    onSubmit?: () => void;
}

export default function SearchBox({ onSubmit }: SearchBoxProps) {
    return (
        <div className="w-full flex items-center justify-between bg-search-light dark:bg-search-dark rounded-lg overflow-hidden">
            <input className="bg-transparent outline-none px-4 py-2 w-full" id="search" placeholder="Search" />
            <label className="mr-2 text-lg text-gray-700" htmlFor="search">
                <BiSearch />
            </label>
        </div>
    );
}
