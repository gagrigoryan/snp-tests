import React, { useRef, useState } from "react";
import styles from "./select.module.scss";
import clsx from "clsx";
import ArrowIcon from "../icons/ArrowIcon";
import useOutsideClick from "@rooks/use-outside-click";

export type TSelectItem = {
    label: string;
    value: any;
};

type SelectProps = {
    items: TSelectItem[];
    onSelect?: (item: TSelectItem) => void;
    defaultItem?: TSelectItem;
    className?: string;
};

const SelectItem: React.FC<TSelectItem & { onClick: (item: TSelectItem) => void }> = ({ label, value, onClick }) => {
    return (
        <button className={styles.selectItem} onClick={() => onClick({ label, value })}>
            {label}
        </button>
    );
};

const Select: React.FC<SelectProps> = ({ items, onSelect, className, defaultItem }) => {
    const [focused, setFocused] = useState<boolean>(false);
    const [selected, setSelected] = useState<TSelectItem | undefined>(defaultItem);
    const ref = useRef<HTMLDivElement>(null);

    const onItemClick = (item: TSelectItem) => {
        setSelected(item);
        onSelect && onSelect(item);
        setFocused(false);
    };

    const outsideClick = () => {
        setFocused(false);
    };

    // @ts-ignore
    useOutsideClick(ref, outsideClick);

    return (
        <div ref={ref} className={clsx(styles.container, focused && styles.focusedContainer, className)}>
            <div className={clsx(styles.field, focused && styles.focusedField)} onClick={() => setFocused(!focused)}>
                <span>{selected?.label}</span>
                <ArrowIcon />
            </div>
            {focused && (
                <div className={styles.dropdown}>
                    {items.map((item) => (
                        <SelectItem key={item.value} {...item} onClick={onItemClick} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Select;
