"use client";
import React from "react";
import Button from "@/components/global/Button";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

function Pagination({ productsCount }: { productsCount: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const pageNum = Number(searchParams.get("page") ?? "1");

  const totalPages = Math.ceil(productsCount / 10);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  // const pageNumbers: number[] = [];
  // for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
  //   pageNumbers.push(i);
  // }

  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(totalPages); i++) {
    pageNumbers.push(i);
  }

  const setPageParam = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-0.5 mt-5">
      <Button
        className="disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={pageNum === 1}
        onClick={() => {
          if (pageNum === 1) return;
          setPageParam(pageNum - 1);
        }}
      >
        Prev
      </Button>

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
          <Button
            className="disabled:border-red-600 disabled:cursor-not-allowed"
            disabled={pageNumber === pageNum}
            key={pageNumber}
            onClick={() => {
              // if (pageNum === 1) return;
              setPageParam(pageNumber);
            }}
          >
            {pageNumber}
          </Button>
        );
      })}
      <Button
        className="disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={pageNum >= totalPages}
        onClick={() => {
          if (pageNum >= totalPages) return;
          setPageParam(pageNum + 1);
        }}
      >
        Next
      </Button>
    </div>
  );
}

export default Pagination;
