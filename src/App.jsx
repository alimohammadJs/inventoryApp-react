import React, { useEffect, useState } from "react";
import AddNewProductForm from "./features/Product/AddNewProductForm";
import AddNewCategoryForm from "./features/Category/AddNewCategoryForm";
import { CategoryProvider } from "./context/CategoryProvider";
import ProductsTable from "./features/Product/ProductsTable";
import useProducts, { ProductsProvider } from "./context/ProductsProvider";
import FilterProducts from "./features/Product/FilterProducts";

function App() {
  return (
    <div className="bg-slate-800 min-h-screen">
      <CategoryProvider>
        <ProductsProvider>
          <Products />
        </ProductsProvider>
      </CategoryProvider>
    </div>
  );
}

function Products() {
  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <>
     
      <div className="container mx-auto p-4 md:flex-row flex-col flex md:justify-between lg:max-w-screen-xl md:gap-x-12">
        <section className="w-full">
          <AddNewCategoryForm />
          <AddNewProductForm />
        </section>

        <section className=" w-full">
          <h2 className="text-slate-500 font-bold mb-5 border-b-slate-500 border-b">
            Filters
          </h2>
          <FilterProducts setFilteredProducts={setFilteredProducts} />
          <h2 className="text-xl text-slate-400 font-bold mb-4 border-b-slate-500 border-b">
            ProductList
          </h2>
          <ProductsTable filteredProducts={filteredProducts} />
        </section>
      </div>
    </>
  );
}

export default App;
