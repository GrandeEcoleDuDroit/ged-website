import {type ReactNode, useEffect, useState} from "react";
import Theme from "../entities/Theme.ts";
import {ThemeContext} from "./ThemeContext.tsx";

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<string>(() => {
        return localStorage.getItem('theme') || Theme.LIGHT;
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    useEffect(() => {
        const handleThemeStorageEvent = (event: StorageEvent) => {
            if (event.key === "theme") {
                alert("Event theme")
                const localTheme = event.newValue;
                if (localTheme) {
                    setTheme(localTheme);
                }
            }
        }

        window.addEventListener("storage", handleThemeStorageEvent);

        return () => {
            window.removeEventListener("storage", handleThemeStorageEvent);
        };
    }, []);

    const toggleTheme = () => {
        const newTheme = theme == Theme.DARK ? Theme.LIGHT : Theme.DARK
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