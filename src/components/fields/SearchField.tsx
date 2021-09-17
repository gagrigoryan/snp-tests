import React, { useEffect, useState } from "react";
import styles from "./searchField.module.scss";
import Input from "../input/Input";
import clsx from "clsx";
import SearchIcon from "../icons/SearchIcon";

type SearchFieldProps = {
    onSearchClick: (value: string) => void;
    defaultValue?: string;
    className?: string;
};

const SearchField: React.FC<SearchFieldProps> = ({ onSearchClick, defaultValue, className }) => {
    const [value, setValue] = useState<string>(defaultValue ? defaultValue : "");

    useEffect(() => {
        const onKeyDown: React.KeyboardEventHandler = (e) => {
            if (e.key === "Enter") {
                onSearchClick(value);
            }
        };

        // @ts-ignore
        document.addEventListener("keydown", onKeyDown);
        return () => {
            // @ts-ignore
            document.removeEventListener("keydown", onKeyDown);
        };
    });

    return (
        <div className={clsx(styles.container, className)}>
            <Input
                onChange={(event) => setValue(event.target.value)}
                value={value}
                placeholder="Введите строку поиска..."
            />
            <button onClick={() => onSearchClick(value)} className={styles.icon}>
                <SearchIcon />
            </button>
        </div>
    );
};

export default SearchField;
