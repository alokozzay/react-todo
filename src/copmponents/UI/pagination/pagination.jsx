import React from "react";
import { usePages } from "../../../hooks/usePages";

export default function Pagination({ totalPages, page, chengePage }) {
  const pagesArray = usePages(totalPages);

  return (
    <div className="wrapper__pages">
      {pagesArray.map((p) => (
        <button
          onClick={() => chengePage(p)}
          key={p}
          className={page === p ? "page page__current" : "page"}
        >
          {p}
        </button>
      ))}
    </div>
  );
}
