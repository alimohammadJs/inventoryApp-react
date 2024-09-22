import React, { useEffect, useState } from "react";
import Input from "../../ui/Input";
import SelectInput from "../../ui/SelectInput";
import { useCategory } from "../../context/CategoryProvider";
import useProducts from "../../context/ProductsProvider";

const productsSort = [{ title: "latest" }, { title: "earliest" }];

function FilterProducts({ setFilteredProducts }) {
  const [products] = useProducts("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");
  const [category, setCategory] = useState("");

  useEffect(() => {
    let result = products;
    result = searchOnTitle(result);
    result = sortOnDate(result);
    result = sortOncategory(result);
    setFilteredProducts(result);
  }, [products, search, sort, category]);

  const searchOnTitle = (array) => {
    return array.filter((p) => p.title.toLowerCase().includes(search));
  };
  const sortOnDate = (array) => {
    return array.sort((a, b) => {
      if (sort === "latest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sort === "earliest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
  };

  const sortOncategory = (array) => {
    if (!category) return array;
    return array.filter((p) => p.category === category);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  const sortHandler = (e) => {
    setSort(e.target.value);
  };
  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };
  const [categorys] = useCategory();
  return (
    <div className="flex justify-between w-full">
      <div className="flex items-center justify-center mb-6">
        <Input
          label="search"
          id="search"
          name="search"
          value={search}
          onChange={searchHandler}
        />
      </div>
      <div className="flex items-center justify-center mb-6">
        <SelectInput
          label="sort"
          id="sort"
          name="sort"
          onChange={sortHandler}
          options={productsSort}
          value={sort}
        />
      </div>
      <div className="flex items-center justify-center mb-6">
        <SelectInput
          label="category"
          id="category"
          name="category"
          onChange={categoryHandler}
          options={categorys}
          value={category}
        />
      </div>
    </div>
  );
}

export default FilterProducts;
