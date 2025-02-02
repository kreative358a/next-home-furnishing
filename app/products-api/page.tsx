"use client";
import CarouselBackground from "@/components/products-api/CarouselBackground";
import { customFetchHF, type ProductHF } from "@/utils";
import { useEffect, useState, useRef, useCallback } from "react";
import ProductsContainerHF from "@/components/products-api/ProductsContainerHF";
import FormInputMy from "@/components/products-api/FormInputMy";
import FormSelectMy from "@/components/products-api/FormSelectMy";
// import { useLocation } from "react-router-dom";
// ProductsContainerHF
// import {
//   // Form,
//   useLoaderData,
//   Link,
// } from "react-router-dom";
// // import { setTimeout } from "timers/promises";
// import resolve from "path";
import SectionTitle from "@/components/products-api/SectionTitle";

function ProductsHFPage() {
  const [products, setProducts] = useState<ProductHF[] | null>();
  // const [categoryValue, setCategoryValue] = useState<string | undefined>("");
  // const location = useLocation();
  // const [isSending, setIsSending] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("best-sellers");
  // const [actionStatus, setActionStatus] = useState("Idle");
  // const [delayDuration, setDelayDuration] = useState(200);
  // const [context, setContext] = useState("");
  // const [query, setQuery] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  // const [rankedSearchResults, setRankedSearchResults] = useState([]);
  // const [searching, setSearching] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [totalItems, setTotalItems] = useState<number>(248);

  const btnRef = useRef(null);
  // const layout = searchParams.layout || "grid";
  // const search = searchParams.search || "";
  console.log("inputValue: ", inputValue);
  // const url = `/keywordSearch?countryCode=us&languageCode=en&keyword=${searchValue}`

  // const unrankedSearch = async () => {
  //   setSearching(true);
  //   setSearchResults(await (await fetch("/api/search?query=" + query)).json());
  //   setSearching(false);
  // };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await customFetchHF(
          "/keywordSearch?countryCode=us&languageCode=en&keyword=best-sellers"
        );
        const data = response.data;
        setProducts(data);
      } catch (error) {}
    };
    fetchProducts();
  }, []);

  const listCategories = [
    "best sellers",
    "kids",
    "beds",
    "sofas",
    "tables",
    "chairs",
  ];

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    setInputValue(event.target.value);
  };

  // React.SyntheticEvent<HTMLFormElement>
  // const handleClick = () => {
  //   setActionStatus('Action in progress...');
  //   setSearchValue(inputValue);
  // };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProducts(null);
    console.log("handleSubmit");
    try {
      const response = await customFetchHF(
        `/keywordSearch?countryCode=us&languageCode=en&keyword=${inputValue}`
      );
      const data = response.data;
      setProducts(data);
      const numberItems = data.length;
      setTotalItems(numberItems);
    } catch (error) {
      console.error(error);
    }
  };

  // console.log("searchValue: ", searchValue);
  // console.log('url: ', url);
  // console.log("products: ", products);
  return (
    <div>
      <CarouselBackground />
      <div className="productsContent px-0.5 sm:px-2 pt-[120px] sm:pt-[94px] pb-4 lg:mt-2">
        <div className="text-base md:text-lg bg-muted/80 w-[100%] max-w-[800px]  mx-auto rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 items-center ">
          <p className="stats text-lg lg:text-xl bg-neutral/90 shadow p-2 text-center rounded-md">
            {" "}
            {`category: ${inputValue || "best-sellers"}`}{" "}
          </p>
          <p className="stats text-lg lg:text-xl bg-neutral/90 shadow p-2 text-center rounded-md">{`${totalItems} product${
            totalItems > 1 && "s"
          }`}</p>
        </div>
        <div className="bg-muted/90 w-[100%] max-w-[800px] mx-auto rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 ">
          <FormSelectMy
            label="select category"
            name="category"
            list={listCategories}
            size="select-sm"
            //defaultValue={keyword}
            value={selectedValue}
            onChange={handleSelectChange}
            // defaultValue={category}
          />
          {/* <Form 
        // onSubmit={handleSubmit}
        > */}
          {/* SEARCH */}
          <form onSubmit={handleSubmit}>
            <FormInputMy
              type="search"
              label="search products"
              // name='search'
              name="keyword"
              size="input-sm"
              value={inputValue}
              onChange={(event) => {
                setInputValue(event.target.value);
                setKeyword(event.target.value);
              }}
            />

            <div className="flex w-[100%] mx-auto rounded-md px-8 py-4 gap-x-4 gap-y-8 sm:grid-cols-2">
              <button
                type="submit"
                className="btn btn-primary btn-sm text-base"
                // onClick={handleClick}

                // ref={btnRef}
              >
                search
              </button>
            </div>
          </form>
          {/* </Form> */}
        </div>

        {products &&
          (typeof products === "object" ? (
            <ProductsContainerHF products={products} />
          ) : (
            <SectionTitle text={`No results for query ${searchValue}`} />
          ))}
      </div>
    </div>
  );
}
export default ProductsHFPage;
