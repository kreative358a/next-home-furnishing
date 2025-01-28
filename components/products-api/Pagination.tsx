"use client";
import React from "react";
import { useState, useEffect } from "react";

type PaginationProps = {
  articlesPerPage: number;
  totalArticles: number;
  currentPage: number;
  paginate: any;
};

const Pagination = ({
  articlesPerPage,
  totalArticles,
  paginate,
  currentPage,
}: PaginationProps) => {
  const [paginationKind, setPaginationKind] = useState<string>("normal");

  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    if (window.innerWidth < 480) {
      setPaginationKind("short");
    } else {
      setPaginationKind("normal");
    }
  }, []);

  return (
    <div className="mt-8 flex mx-auto justify-center sm:justify-end">
      <div className="mx-auto max-w-[90%] min-[540px]:max-w-full min-[540px]:join ">
        <button
          className="btn btn-sm sm:btn-md my-2 mr-1 min-[540px]:my-0 join-item focus:border-none focus:outline-none box-shadow-around-sm-blue"
          onClick={() => {
            let prevPage = currentPage - 1;
            if (prevPage < 1) {
              paginate(currentPage);
            } else {
              paginate(currentPage - 1);
            }
          }}
        >
          Prev
        </button>
        {pageNumbers.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              onClick={() => paginate(pageNumber)}
              className={`btn bg-muted/90 btn-sm sm:btn-md border-none join-item focus:border-none focus:outline-none box-shadow-around-sm-blue mx-1 ${
                pageNumber === currentPage ? "bg-secondary text-red-500" : ""
              }`}
              style={{ borderRadius: "4px" }}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          className="btn btn-sm bg-muted/90 sm:btn-md join-item focus:border-none focus:outline-none box-shadow-around-sm-blue"
          onClick={() => {
            let nextPage = currentPage + 1;
            if (nextPage > pageNumbers.slice(-1)[0]) {
              paginate(currentPage);
            } else {
              paginate(currentPage + 1);
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
