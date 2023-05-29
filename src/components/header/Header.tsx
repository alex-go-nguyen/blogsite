import React from 'react';
import { useTheme } from 'next-themes';
import SearchBox from '../searchBox/SearchBox';
import ToggleButton from '../toggleButton/ToggleButton';
import Link from 'next/link';

export default function Header() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex items-center justify-between">
            <div className="w-1/4 h-full">
                <img
                    src={theme === 'dark' ? '../logo-dark.png' : '../logo-light.png'}
                    alt="meta blog"
                    className="w-2/5"
                />
            </div>
            <ul className="flex justify-between items-center text-color-bold flex-1 mr-20 dark:text-white">
                <li className="mx-4 cursor-pointer">
                    <Link href="">Home</Link>
                </li>
                <li className="mx-4 cursor-pointer">
                    <Link href="">Blog</Link>
                </li>
                <li className="mx-4 cursor-pointer">
                    <Link href="">Single Post</Link>
                </li>
                <li className="mx-4 cursor-pointer">
                    <Link href="">Pages</Link>
                </li>
                <li className="mx-4 cursor-pointer">
                    <Link href="">Contact</Link>
                </li>
            </ul>
            <div className="w-1/6 ml-16 mr-10">
                <SearchBox />
            </div>
            <div className="w-1/7">
                <ToggleButton onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
            </div>
        </div>
    );
}
