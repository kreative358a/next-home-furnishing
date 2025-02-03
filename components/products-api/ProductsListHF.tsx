/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState, useRef } from "react";
import { nanoid } from "nanoid";
// import ReactPaginate from "react-paginate";

// import Search from "./Search/Search";
// import Sort from "./Sort/Sort";
// import { chosePage, selectFilter } from "/redux/Slices/filterSlice";
import PaginationHF from "./PaginationHF";
import FormInputHF from "./FormInputHF";
import FormSelectHF from "./FormSelectHF";
import FormRangeHF from "./FormRangeHF";
import ProductDialogListHF from "./ProductDialogListHF";
import { ProductHF, type ProductsResponseHF } from "@/utils";

const categories = ["all", "Tables", "Chairs", "Kids", "Sofas", "Beds"];

const pages = [12, 24, 48];

const sorts = ["a-z", "z-a", "low-high", "high-low"];

const getArticlesPerPageFromLocalStorage = () => {
  console.log(
    'localStorage.getItem("articlesPerPage")',
    localStorage.getItem("articlesPerPage")
  );
  const articlesPerPage = localStorage.getItem("articlesPerPage");
  if (articlesPerPage !== null) {
    return parseInt(articlesPerPage);
  }
  return 24;
};

const getSelectCategoryFromSessionStorage = () => {
  return localStorage.getItem("selectCategory") || "all";
};

const getSelectCategoryFromLocalStorage = () => {
  return localStorage.getItem("selectCategory") || "all";
};

// const byteSize = (str: string) => new Blob([str]).size;

const ProductsListHF = ({ products }: { products: ProductHF[] }) => {
  // const { products } = useLoaderData();
  // const products = useLoaderData() as ProductsResponseHF;

  const maxPrice = 5000;

  const [hfApi, setHFApi] = useState<React.ReactNode[]>([]);
  const [datas, setDatas] = useState<ProductHF[]>([]); // add your data to here
  // const [dataCopy, setDataCopy] = useState(getCopyDataFromLocalStorage);
  const [dataCopy, setDataCopy] = useState<ProductHF[]>([]);
  const [selectedLength, setSelectedLength] = useState(datas.length);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [articlesPerPage, setArticlesPerPage] = useState<number>(
    getArticlesPerPageFromLocalStorage
  );
  // const [articlesPerPage, setArticlesPerPage] = useState(3);
  const [searchArticle, setSearchArticle] = useState(
    // getSearchArticleFromLocalStorage
    ""
  );
  const [selectCategory, setSelectCategory] = useState(
    // getSelectCategoryFromLocalStorage
    "all"
  );
  // const [selectSort, setSelectSort] = useState(getSelectSortFromLocalStorage);
  const [selectSort, setSelectSort] = useState("a-z");
  // const [selectedMinPrice, setSelectedMunPrice] = useState(parseInt(price) || 0);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState<number>(maxPrice);
  const inputRef = useRef();

  useEffect(() => {
    setSelectSort("a-z");
    setSearchArticle("");
    setSelectCategory("all");
    setSelectedMaxPrice(5000);
    // setArticlesPerPage(24);

    const newData = products.sort((a, b) =>
      a.imageAlt.toLowerCase() > b.imageAlt.toLowerCase()
        ? 1
        : b.imageAlt.toLowerCase() > a.imageAlt.toLowerCase()
        ? -1
        : 0
    );

    setDatas(newData); // set your data to state
    setDataCopy(newData);
    // console.log(" useEffect hfApi");
    const hfApi = renderDataList(newData); // render your component
    // console.log("1. hfApi.length: ", hfApi.length);
    setHFApi(hfApi); // set it to state
    // }, [products]);
  }, []);

  // const handleModal = (id: string) => {
  //   const elementModal: any = document.getElementById(`my_modal_${id}`);
  //   if (elementModal !== null) {
  //     elementModal.showModal();
  //   }
  // };

  const renderDataList = (datas: ProductHF[]) => {
    return datas.map((product) => {
      setSelectedLength(datas.length);
      // let newDataCopy = dataCopy;
      // setDataCopy(newDataCopy);
      const { price, image, imageAlt, categoryPath, name, typeName } = product;
      const id = product.id;
      // const dollarsAmount = formatPrice(price);
      const dollarsAmount = Math.ceil(price.currentPrice);
      const categoryName = categoryPath[1].name;

      return (
        <div
          key={`${id}-list`}
          // key={nanoid()}
          // key={id}
          // to={`/products-hf/${item.id}`}
          className="p-4 rounded-md flex flex-col sm:flex-row gap-y-4 flex-wrap  bg-secondary/70 shadow-xl hover:shadow-2xl duration-300 group border-2 hover:border-2 border-blue-300/10 hover:border-blue-300/40 hover:bg-secondary/80"
          // target="_blank"
        >
          {/* <figure className="px-4 pt-4"> */}
          <div className="flex flex-row">
            <img
              src={image}
              alt={imageAlt}
              className="h-[10rem] w-[10rem] min-h-[10rem] min-w-[10rem] sm:h-[10rem] sm:w-[10rem] rounded-lg md:h-[12rem] md:w-[12rem] object-cover group-hover:scale-105 transition duration-300 border-2 border-slate-500/20"
            />
            {/* </figure> */}
            <div className="ml-4 sm:ml-8 md:ml-12 lg:ml-16">
              <p className="text-lg lg:text-xl 2xl:text-2xl font-semibold">
                {name}
              </p>
              <p className="text-base lg:text-lg 2xl:text-xl text-muted-foreground md:mt-1">
                Home Furnishings
              </p>
              <p className="text-sm lg:text-base 2xl:text-lg tracking-wider">
                {imageAlt.split(",")[0] || ""}
                <br />{" "}
                {`${imageAlt.split(",")[1] || ""} ${
                  imageAlt.split(",")[2] || ""
                }`}
              </p>
              {/* <h2 className="text-sm lg:text-base 2xl:text-lg tracking-wider leading-tight" >
              {imageAlt}
            </h2> */}
              <p className="text-green-600 text-base lg:text-lg 2xl:text-xl md:mt-1">
                category: {categoryName}
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto items-center justify-between md:ml-auto flex flex-row md:flex-col">
            <p className="font-medium ml-0 sm:ml-auto text-lg">
              ${dollarsAmount.toFixed(2)}
            </p>
            <div className="mt-[-6px] ml-[48px] md:ml-[28px]  md:mt-2">
              <ProductDialogListHF
                key={`${id}-dialog-list-key`}
                // key={nanoid()}
                id={`${id}-dialog-list-id`}
                product={product}
              />
            </div>
          </div>
        </div>
      );
    });
  };

  // const dollarsAmount = price.currentPrice;
  // const categoryName = categoryPath[0].name;
  const indexOfLastArticle = currentPage * articlesPerPage; // 1 * 10 = 10
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage; // 10 - 10 = 0
  const currentArticles = hfApi?.slice(indexOfFirstArticle, indexOfLastArticle); // 0 to 10

  // const handleSearchInput = async  (event) => {
  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(1);

    setSearchArticle(event.target.value);
    // setSelectCategory("all");
    if (selectCategory === "all") {
      const newDataRender = renderDataList(
        datas
          .filter((item) => item.price.currentPrice <= selectedMaxPrice)
          .filter((item) =>
            item.imageAlt.toLowerCase().includes(event.target.value)
          )
      ); // render filtered data
      setHFApi(newDataRender);
      // and set it to state
      // console.log("newDataRender.length: ", newDataRender.length);
      // console.log("hfApi.length: ", hfApi.length);
      return true;
    }
    if (selectCategory !== "all") {
      const newData = renderDataList(
        datas
          .filter(
            (item) => item.categoryPath[1].name.split(" ")[0] === selectCategory
          )
          .filter((item) => item.price.currentPrice <= selectedMaxPrice)
          .filter((item) =>
            item.imageAlt.toLowerCase().includes(event.target.value)
          )
      );
      setHFApi(newData);
      return true;
    }
  };

  // setSearchArticle("");
  const handleSelectCategory = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCurrentPage(1);
    localStorage.setItem("selectCategory", event.target.value);
    setSelectCategory(getSelectCategoryFromLocalStorage);
    // console.log("handleSelectCategory selectCategory: ", selectCategory);
    // setDataCopy(data);
    //
    setDataCopy(datas);
    if (event.target.value === "all") {
      const newDataRender = renderDataList(
        datas
          .filter((item) => item.price.currentPrice <= selectedMaxPrice)
          .filter((item) => item.imageAlt.toLowerCase().includes(searchArticle))
      ); // render filtered data
      setHFApi(newDataRender);
      return true;
    }
    // setDataCopy(data);

    if (event.target.value !== "all") {
      const newDataRender = renderDataList(
        datas
          .filter(
            (item) =>
              item.categoryPath[1].name.split(" ")[0] === event.target.value
          )
          .filter((item) => item.price.currentPrice <= selectedMaxPrice)
          .filter((item) => item.imageAlt.toLowerCase().includes(searchArticle))
      ); // render filtered data
      setHFApi(newDataRender);
      return true;
    }
  };

  const handleSelectSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentPage(1);
    // setSearchArticle("");
    // setSelectCategory("all");
    // setSelectSort(event.target.value);
    setSelectSort(event.target.value);
    // localStorage.setItem("selectSort", event.target.value);

    // console.log("selectSort event.target.value: ", event.target.value);
    if (selectCategory === "all") {
      if (event.target.value === "a-z") {
        const newDataRenderAZ = renderDataList(
          // newDataCopy
          datas
            .sort((a, b) =>
              a.imageAlt.toLowerCase() > b.imageAlt.toLowerCase()
                ? 1
                : b.imageAlt.toLowerCase() > a.imageAlt.toLowerCase()
                ? -1
                : 0
            )
            .filter((item) => item.price.currentPrice <= selectedMaxPrice)
            .filter((item) =>
              item.imageAlt.toLowerCase().includes(searchArticle)
            )
          //  (a > b ? 1 : b > a ? -1 : 0)
          // sort(a, b) {return (a.name > b.name) - (a.name < b.name);}
          // )
        );
        // console.log("a-z data", dataCopy);
        setHFApi(newDataRenderAZ);
        return true;
      }
      if (event.target.value === "z-a") {
        const newDataRenderZA = renderDataList(
          datas
            .sort((a, b) =>
              b.imageAlt.toLowerCase() > a.imageAlt.toLowerCase()
                ? 1
                : a.imageAlt.toLowerCase() > b.imageAlt.toLowerCase()
                ? -1
                : 0
            )
            .filter((item) => item.price.currentPrice <= selectedMaxPrice)
            .filter((item) =>
              item.imageAlt.toLowerCase().includes(searchArticle)
            )
        );

        setHFApi(newDataRenderZA);
        return true;
      }

      if (event.target.value === "low-high") {
        const newDataRenderLow = renderDataList(
          datas
            .sort((a, b) => a.price.currentPrice - b.price.currentPrice)
            .filter((item) => item.price.currentPrice <= selectedMaxPrice)
            .filter((item) =>
              item.imageAlt.toLowerCase().includes(searchArticle)
            )
        );
        // console.log("low-hight data: ", dataCopy);

        setHFApi(newDataRenderLow);
        return true;
      }
      if (event.target.value === "high-low") {
        // setData(newDataCopy);
        const newDataRenderHigh = renderDataList(
          datas
            .sort((a, b) => b.price.currentPrice - a.price.currentPrice)
            .filter((item) => item.price.currentPrice <= selectedMaxPrice)
            .filter((item) =>
              item.imageAlt.toLowerCase().includes(searchArticle)
            )
        );
        // console.log("high-low data", dataCopy);
        setHFApi(newDataRenderHigh);
        return true;
      }
    }

    if (selectCategory !== "all") {
      if (event.target.value === "a-z") {
        //  (a > b ? 1 : b > a ? -1 : 0)
        // sort(a, b) {return (a.name > b.name) - (a.name < b.name);}
        // )
        const newDataRenderAZ = renderDataList(
          // newDataCopy
          datas
            .sort((a, b) =>
              a.imageAlt.toLowerCase() > b.imageAlt.toLowerCase()
                ? 1
                : b.imageAlt.toLowerCase() > a.imageAlt.toLowerCase()
                ? -1
                : 0
            )
            .filter(
              (item) =>
                item.categoryPath[0].name.split(" ")[0] === selectCategory
            )
            .filter((item) => item.price.currentPrice <= selectedMaxPrice)
            .filter((item) =>
              item.imageAlt.toLowerCase().includes(searchArticle)
            )
        );
        // console.log("a-z data", dataCopy);
        setHFApi(newDataRenderAZ);
        return true;
      }
      if (event.target.value === "z-a") {
        const newDataRenderZA = renderDataList(
          datas
            .sort((a, b) =>
              b.imageAlt.toLowerCase() > a.imageAlt.toLowerCase()
                ? 1
                : a.imageAlt.toLowerCase() > b.imageAlt.toLowerCase()
                ? -1
                : 0
            )
            .filter(
              (item) =>
                item.categoryPath[0].name.split(" ")[0] === selectCategory
            )
            .filter((item) => item.price.currentPrice <= selectedMaxPrice)
            .filter((item) =>
              item.imageAlt.toLowerCase().includes(searchArticle)
            )
        );

        setHFApi(newDataRenderZA);
        return true;
      }

      if (event.target.value === "low-high") {
        const newDataRenderLow = renderDataList(
          datas
            .sort((a, b) => {
              return a.price.currentPrice - b.price.currentPrice;
            })
            .filter(
              (item) =>
                item.categoryPath[0].name.split(" ")[0] === selectCategory
            )
            .filter((item) => item.price.currentPrice <= selectedMaxPrice)
            .filter((item) =>
              item.imageAlt.toLowerCase().includes(searchArticle)
            )
        ); // render filtered data
        // console.log("low-hight data: ", dataCopy);

        setHFApi(newDataRenderLow);
        return true;
      }
      if (event.target.value === "high-low") {
        // let newDataCopy = data.sort((a, b) => {
        //   return b.price.currentPrice - a.price.currentPrice;
        // });
        // setData(newDataCopy);
        const newDataRenderHigh = renderDataList(
          datas
            .sort((a, b) => {
              return b.price.currentPrice - a.price.currentPrice;
            })
            .filter(
              (item) =>
                item.categoryPath[0].name.split(" ")[0] === selectCategory
            )
            .filter((item) => item.price.currentPrice <= selectedMaxPrice)
            .filter((item) =>
              item.imageAlt.toLowerCase().includes(searchArticle)
            )
        );
        // console.log("high-low data", dataCopy);
        setHFApi(newDataRenderHigh);
        return true;
      }
    }
  };

  const handleRangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(1);
    setSelectedMaxPrice(parseInt(event.target.value));
    if (selectCategory === "all") {
      const newDataRender = renderDataList(
        datas
          .filter((item) => {
            return item.price.currentPrice <= parseInt(event.target.value);
          })
          .filter((item) => item.imageAlt.toLowerCase().includes(searchArticle))
      ); // render filtered data
      setHFApi(newDataRender);
      return true;
    }
    if (selectCategory !== "all") {
      const newDataRender = renderDataList(
        datas
          .filter(
            (item) => item.price.currentPrice <= parseInt(event.target.value)
          )
          .filter(
            (item) => item.categoryPath[0].name.split(" ")[0] === selectCategory
          )
          .filter((item) => item.imageAlt.toLowerCase().includes(searchArticle))
      ); // render filtered data
      setHFApi(newDataRender);
      return true;
    }
  };

  console.log("selectedMaxPrice: ", selectedMaxPrice);

  const handleResetButton = () => {
    setCurrentPage(1);
    // let newDataCopy = products;
    // setDataCopy(newDataCopy);
    setDatas(dataCopy);
    // localStorage.setItem("searchArticle", "");
    setSearchArticle("");
    // localStorage.setItem("selectCategory", "all");
    setSelectCategory("all");
    // localStorage.setItem("selectSort", "a-z");
    setSelectSort("a-z");
    const newDataRenderReset = renderDataList(dataCopy);
    setHFApi(newDataRenderReset);
  };

  const handleArticlesPerPage = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCurrentPage(1);
    setArticlesPerPage(parseInt(event.target.value));
    localStorage.setItem("articlesPerPage", event.target.value);
  };

  // const { search, pathname } = useLocation();

  // https://reactrouter.com/en/6.28.0/hooks/use-navigate
  const paginate = (pageNumber: number) => {
    // console.log("keyword", search);
    // console.log("pathname", pathname);
    // console.log("location: ", location);
    // console.log("uselocation: ", uselocation);
    setCurrentPage(pageNumber);
    // new URL(".", window.origin + location.pathname + "/");
    // const currentUrl = new URL(`${pathname}${search}#page=${pageNumber}`);
    // searchParams.set("page", currentPage);
    // console.log("currentUrl", currentUrl);

    // setCurrentPage(pageNumber);
    // setCurrentPath(`${pathname}${search}?page=${pageNumber}`);
    // console.log();
    // navigate(`${currentUrl}`);
  };
  // console.log("currentPath: ", currentPath);
  // console.log("selectCategory: ", selectCategory);
  // console.log("selectSort: ", selectSort);
  // console.log("articlesPerPage: ", articlesPerPage);
  // console.log("products.length: ", products.length);
  // console.log("data.length: ", data.length);
  // console.log("dataCopy.length: ", dataCopy.length);
  // console.log("hfApi?.length", hfApi?.length);

  return (
    <div className="pb-6">
      <div className="text-base md:text-lg bg-muted/80 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 items-center">
        <p className="stats text-accent-foreground text-lg lg:text-xl bg-muted/60 shadow p-2 text-center rounded-md">
          {" "}
          {`selected subcategory: ${selectCategory || "all"}`}
        </p>
        <p className="stats text-accent-foreground text-lg lg:text-xl bg-muted/60 shadow p-2 text-center rounded-md">
          {" "}
          {`all product${datas.length > 1 && "s"} ${datas.length}`}
        </p>
        <p className="stats text-accent-foreground text-lg lg:text-xl bg-muted/60 shadow p-2 text-center rounded-md">
          {" "}
          {`selected product${selectedLength > 1 && "s"}  ${selectedLength} `}
        </p>
      </div>
      <div className="bg-muted/90 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
        <Search onChange={handleSearchInput} searchArticle={searchArticle} />
        <SelectCategory
          onChange={handleSelectCategory}
          selectCategory={selectCategory}
        />
        <SelectSort onChange={handleSelectSort} selectSort={selectSort} />
        <FormSelectHF
          label="articles per page"
          name="pages"
          list={pages}
          size="select-sm"
          value={Number(articlesPerPage) || 24}
          // defaultValue={selectCategory}
          onChange={handleArticlesPerPage}
          // onChange={(e) => setArticlesPerPage(e.target.value)}
        />
        <SelectRangePrice
          onChange={handleRangePrice}
          selectedMaxPrice={Number(selectedMaxPrice)}
          // value={Number(selectedMaxPrice) || 500000}
        />
        <button
          type="button"
          className="btn btn-accent btn-sm text-base"
          onClick={handleResetButton}
        >
          reset
        </button>
      </div>
      <PaginationHF
        articlesPerPage={articlesPerPage}
        totalArticles={hfApi?.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      <div className="px-2 py-4 sm:p-4 2xl:p-6 grid gap-y-2 sm:gap-y-4">
        {currentArticles}
      </div>
      <PaginationHF
        articlesPerPage={articlesPerPage}
        totalArticles={hfApi?.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

const Search = ({
  onChange,
  searchArticle,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchArticle: string;
}) => {
  // function Search({ onChange, searchArticle }) {

  return (
    <>
      <FormInputHF
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        // defaultValue={searchArticle}
        value={searchArticle}
        onChange={onChange}
        // key={'searchGrid'}
      />
    </>
  );
};

const SelectCategory = ({
  onChange,
  selectCategory,
}: {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectCategory: string;
}) => {
  return (
    <>
      <FormSelectHF
        label="select category"
        name="category"
        list={categories}
        size="select-sm"
        // defaultValue={selectCategory}
        value={selectCategory}
        onChange={onChange}
        // key={"categoryGrid"}
      />
    </>
  );
};

const SelectSort = ({
  onChange,
  selectSort,
}: {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectSort: string;
}) => {
  return (
    <>
      <FormSelectHF
        label="select sort"
        name="sort"
        list={sorts}
        size="select-sm"
        // defaultValue={order}
        value={selectSort}
        onChange={onChange}
        // key={"sortGrid"}
      />
    </>
  );
};

const SelectRangePrice = ({
  onChange,
  selectedMaxPrice,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedMaxPrice: number;
}) => {
  return (
    <>
      <FormRangeHF
        name="price"
        label="select price"
        size="range-sm"
        // defaultValue={order}
        value={selectedMaxPrice}
        onChange={onChange}
        // key={"priceGrid"}
      />
    </>
  );
};

export default ProductsListHF;
