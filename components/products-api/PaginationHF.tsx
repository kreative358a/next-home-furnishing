/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState, useEffect } from "react";

type PaginationHFProps = {
  articlesPerPage: number;
  totalArticles: number;
  currentPage: number;
  paginate: any;
};

const PaginationHF = ({
  articlesPerPage,
  totalArticles,
  paginate,
  currentPage,
}: PaginationHFProps) => {
  // console.log("currentPage", currentPage);
  const [paginationKind, setPaginationKind] = useState<string>("normal");

  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }
  // const pageNumbers = Array.from(
  //   { length: totalArticles / articlesPerPage },
  //   (_, index) => {
  //     return index + 1;
  //   }
  // );

  useEffect(() => {
    // const handleResize = () => setWidth(window.innerWidth);
    // window.addEventListener('resize', handleResize);
    if (window.innerWidth < 480) {
      setPaginationKind("short");
    } else {
      setPaginationKind("normal");
    }
    // return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="mt-8 flex mx-auto justify-center sm:justify-end">
      <div className="mx-auto max-w-[90%] min-[540px]:max-w-full min-[540px]:join ">
        <button
          className="btn btn-sm sm:btn-md my-2 mr-1 min-[540px]:my-0 join-item focus:border-none focus:outline-none box-shadow-around-sm-blue bg-muted/90 text-blue-600"
          onClick={() => {
            const prevPage = currentPage - 1;
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
          // return (
          //   <a href={`#page=${currentPage}`}>
          //     <button
          //       key={pageNumber}
          //       onClick={() => paginate(pageNumber)}
          //       className={`btn btn-xs sm:btn-md border-none join-item ${
          //         pageNumber === currentPage ? "bg-primary border-red-300" : ""
          //       }`}
          //       style={{ borderRadius: "4px" }}
          //     >
          //       {pageNumber}
          //     </button>
          //   </a>
          // );
          return (
            <button
              key={pageNumber}
              onClick={() => paginate(pageNumber)}
              className={`btn btn-sm sm:btn-md bg-muted/90 border-none join-item focus:border-none focus:outline-none box-shadow-around-sm-blue mx-1 ${
                pageNumber === currentPage ? "bg-secondary text-red-500" : ""
              }`}
              style={{ borderRadius: "4px" }}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          className="btn btn-sm sm:btn-md bg-muted/90 join-item focus:border-none focus:outline-none box-shadow-around-sm-blue text-blue-600"
          // className="btn btn-sm bg-muted/90 sm:btn-md join-item focus:border-none focus:outline-none box-shadow-around-sm-blue text-blue-600"
          onClick={() => {
            const nextPage: any = currentPage + 1;
            if (nextPage > pageNumbers.slice(-1)) {
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

export default PaginationHF;
