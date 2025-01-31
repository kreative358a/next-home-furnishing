"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
// import {
//   ProductsResponseWithParams,
//   constructUrl,
//   constructPrevOrNextUrl,
// } from '@/utils';
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

type ConstructPrevOrNextParams = {
  currentPage: number;
  pageCount: number;
  search?: string;
  pathname: string;
};

type ConstructUrlParams = {
  pageNumber: number;
  search?: string;
  pathname: string;
};

function PaginationContainer({ productsCount }: { productsCount: number }) {
  // const { meta } = useLoaderData() as ProductsResponseWithParams;
  // const { pageCount, page } = meta.pagination;

  // const { search, pathname } = useLocation();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = Number(searchParams.get("page") ?? "1");
  const pageCount = Math.ceil(productsCount / 10);
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  const setPageParam = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    return router.replace(`${pathname}?${params.toString()}`);
  };

  const constructUrl = ({
    pageNumber,
    pathname,
  }: ConstructUrlParams): string => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    router.replace(`${pathname}?${params.toString()}`);

    // return `${pathname}?${searchParams.toString()}`;
    return `${pathname}?${params.toString()}`;
  };

  if (pageCount < 2) return null;

  // const renderPagination = pages.map((pageNumber) => {
  //   const isActive = pageNumber === page;
  //   const url = constructUrl({ pageNumber, search, pathname });

  const constructPrevOrNextUrl = ({
    currentPage,
    pageCount,
    pathname,
  }: ConstructPrevOrNextParams): { prevUrl: string; nextUrl: string } => {
    let prevPage = currentPage - 1;
    if (prevPage < 1) prevPage = pageCount;
    const prevUrl = constructUrl({ pageNumber: prevPage, pathname });

    let nextPage = currentPage + 1;
    if (nextPage > pageCount) nextPage = 1;
    const nextUrl = constructUrl({ pageNumber: nextPage, pathname });

    return { prevUrl, nextUrl };
  };

  const renderPagination = pages.map((pageNumber) => {
    const isActive = pageNumber === page;
    // const url = setPageParam(pageNumber)
    const url = constructUrl({ pageNumber, pathname });

    return (
      <PaginationItem key={pageNumber}>
        <PaginationLink isActive={isActive}>
          <Link href={url}>{pageNumber}</Link>
        </PaginationLink>
      </PaginationItem>
    );
  });

  const { prevUrl, nextUrl } = constructPrevOrNextUrl({
    currentPage: page,
    pageCount,
    pathname,
  });
  return (
    <Pagination className="mt-16">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={prevUrl} />
        </PaginationItem>
        {renderPagination}
        <PaginationItem>
          <PaginationNext href={nextUrl} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
export default PaginationContainer;
