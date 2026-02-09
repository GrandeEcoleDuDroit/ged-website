import {createContext} from "react";
import type {Theme} from "../entities/Theme.ts";

export interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);