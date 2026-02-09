import {type ReactNode, useLayoutEffect, useState} from "react";
import type {Theme} from "../entities/Theme.ts";
import {ThemeContext} from "./ThemeContext.tsx";

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(() => {
        return localStorage.getItem("theme") as Theme | undefined ?? "light";
    });

    useLayoutEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme: Theme = theme == "dark" ? "light" : "dark"
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;