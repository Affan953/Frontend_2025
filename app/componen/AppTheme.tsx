"use client";
import { ReactNode, useContext } from "react";
import { AppContext } from "./AppContext";
import clsx from "clsx";
import Button from "./Button";

interface ThemeProps {
  title: string;
  children: ReactNode;
}

const AppTheme: React.FC<ThemeProps> = ({ title, children }) => {
  const appContext = useContext(AppContext);
  const { theme, toggleTheme } = appContext;
  return (
    <>
      <header
        className={clsx(
          ` w-full h-[100px] flex items-center justify-center uppercase flex font-semibold items-center px-5 `,
          {
            "bg-red-500": theme === "light",
            "bg-blue-400 text-white ": theme === "dark",
          }
        )}
      >
        <h1 className="text-3xl"> {title}</h1>
        
      </header>
      <div
        className={clsx(` border h-screen w-full`, {
          "bg-gray-200": theme === "light",
          "bg-gray-800 text-white ": theme === "dark",
        })}
      >
        {children}
      </div>
    </>
  );
};

export default AppTheme;