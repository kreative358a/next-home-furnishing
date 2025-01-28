"use client";
import { 
  Form, 
  useLoaderData, 
  Link 
} from "react-router-dom";
import FormInputMy from "./FormInputMy";
import FormSelectMy from "./FormSelectMy";
import { ProductsResponseWithParamsHF } from "@/utils";
import { useLocation } from "react-router-dom";


import { SetStateAction, useState, useEffect } from "react";

const FiltersHF = ({ 
  totalItems, 
  // categoryValue 
}: { 
  totalItems: number; 
  // categoryValue: string 
}) => {
  const categories = ["best-sellers"];
  const [selectedValue, setSelectedValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  // const [categoryValue, setCategoryValue] = useState(categories.slice(-1));
  // const [categoryValue, setCategoryValue] = useState("");
  // const location = useLocation();
  // console.log("selectedValue: ", selectedValue);
  // console.log("inputValue: ", inputValue);

  // {pathname: '/products-hf', search: '?keyword=beds', hash: '', state: null, key: '1t27g5wh'}
  // console.log("location.search: ", location.search);
  // useEffect(() => {
  //   // console.log("location.pathname: ", location.pathname);
  //   // const category = location.search.split("keyword=").slice(1)[0];
  //   // alert(category);
  //   // setCategoryValue(category);
  //   if (location.search !== "") {
  //     const category = location.search.split("keyword=").slice(1)[0];
  //     setCategoryValue(category);
  //     // categories.push(category);
  //   }
  // }, []);

  const listCategories = [
    "best sellers",
    "kids",
    "beds",
    "sofas",
    "tables",
    "chairs",
  ];
  //   React.ChangeEvent<HTMLSelectElement>
  // const handleSelectChange = (event: {target: { value: SetStateAction<string> };
  // }) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    setInputValue(event.target.value);
  };

  // //  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  // const handleSubmit = () => {
  //   // e.preventDefault();
  //   // const formData = new FormData(e.target as HTMLFormElement);
  //   // const category = formData.get("keyword") as string;
  //   // categories.push(category);
  // };

  return (
    <>
      <div className="text-base md:text-lg bg-muted/80 w-[100%] max-w-[800px]  mx-auto rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 items-center ">
        <p className="stats text-xl md:text-2xl xl:text-3xl bg-neutral/90 shadow p-2 text-center rounded-md">
          {" "}
          {`category: ${inputValue || "best-sellers"}`}{" "}
        </p>
        <p className="stats text-xl md:text-2xl xl:text-3xl bg-neutral/90 shadow p-2 text-center rounded-md">{`${totalItems} product${
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
          <FormInputMy
            type="text"
            label="search products"
            // name='search'
            name="keyword"
            size="input-sm"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />

          <div className="bg-muted w-[100%] mx-auto rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2">
            <button
              // type="submit"
              className="btn btn-primary btn-sm text-base"

              // onClick={category.clear()}
            >
              search
            </button>
            <Link to="/products" className="btn btn-accent btn-sm text-base">
              reset
            </Link>
          </div>
        {/* </Form> */}
      </div>
    </>
  );
};
export default FiltersHF;
