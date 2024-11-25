import React from 'react';
import usePagesArray from "../../hooks/usePagesArray";

export default function MyPagination({totalPages, page, changePage}) {
    const pagesArray = usePagesArray(totalPages);
    return (
        <div className="page-wrapper">
            {pagesArray.map(p =>
                <span key={p} onClick={() => changePage(p)}
                      className={page === p ? "page page-current" : "page"}>{p}</span>)}
        </div>
    )
};
