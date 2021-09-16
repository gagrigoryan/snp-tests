import React from "react";
import styles from "./pagination.module.scss";
import clsx from "clsx";

type PaginationProps = {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
};

type PaginationButton = {
    index: number;
    active?: boolean;
    onClick: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
const PaginationButton: React.FC<PaginationButton> = ({ index, active, onClick }) => {
    return (
        <button onClick={onClick} className={clsx(styles.button, active && styles.activeButton)}>
            {index}
        </button>
    );
};

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
    const pagesArray: number[] = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className={styles.container}>
            {pagesArray.map((item) => (
                <PaginationButton
                    key={`${item}`}
                    active={item === currentPage}
                    index={item}
                    onClick={() => onPageChange(item)}
                />
            ))}
        </div>
    );
};

export default Pagination;
