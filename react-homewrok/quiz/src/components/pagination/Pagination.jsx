import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../features/products/products";
import { LIMIT } from "../../api";

const Pagination = () => {
    const { page, total } = useSelector((store) => store.products);
    const dispatch = useDispatch();
    const totalPages = Math.ceil(total / LIMIT);

    return (
        <div>
            <button disabled={page === 1} onClick={() => dispatch(setPage(page - 1))}>
                Previous
            </button>
            <span>
                {" "}
                {page} / {totalPages}{" "}
            </span>
            <button
                disabled={page >= totalPages}
                onClick={() => dispatch(setPage(page + 1))}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;