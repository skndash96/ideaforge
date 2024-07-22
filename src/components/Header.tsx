"use client";
import { Link } from "wouter";
import { FcIdea as BulbIcon } from "react-icons/fc";
import { MdDarkMode as DarkIcon, MdLightMode as LightIcon } from "react-icons/md";
import { useEffect, useState } from "react";

const LIGHT_THEME = "bumblebee",
    DARK_THEME = "coffee";

type Theme = "coffee" | "bumblebee";

export default function Header() {
    const [theme, setTheme] = useState<Theme>(LIGHT_THEME);

    useEffect(() => {
        let theme: Theme = localStorage.getItem("theme") === DARK_THEME ? DARK_THEME : LIGHT_THEME;
        setTheme(theme);
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const handleThemeToggle = () => {
        setTheme(theme => theme === DARK_THEME ? LIGHT_THEME : DARK_THEME);
    };

    return (
        <header className="flex justify-between items-center">
            <div className="px-2 py-2">
                <h1 className="flex gap-2 text-xl font-black">
                    <BulbIcon />
                    Ideaforge
                </h1>
            </div>

            <div className="pr-2 flex gap-2">
                <Link href="/about" className="btn btn-sm btn-ghost">
                    About
                </Link>
                <Link href="/submit" className="btn btn-sm btn-ghost">
                    Write
                </Link>
                <Link href="/" className="btn btn-sm btn-primary">
                    Explore
                </Link>
                <button onClick={handleThemeToggle} className={`swap swap-rotate btn btn-ghost btn-sm ${theme === DARK_THEME ? "swap-active" : ""}`}>
                    <LightIcon className="swap-on" />
                    <DarkIcon className="swap-off" />
                </button>
            </div>
        </header>
    );
}