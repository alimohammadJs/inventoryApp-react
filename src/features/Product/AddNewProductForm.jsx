import React, { useState } from "react";
import Input from "../../ui/Input";
import SelectInput from "../../ui/SelectInput";
import { useCategory } from "../../context/CategoryProvider";
import useProducts from "../../context/ProductsProvider";

function AddNewProductForm() {
  const [categorys] = useCategory();
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("");
  const [product, setProducts] = useProducts();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || category === "" || title.length>=10) return null;
    const newProducts = {
      id: new Date().toISOString(),
      createdAt: new Date().getTime(),
      title,
      quantity,
      category,
    };
    setProducts((prev) => [...prev, newProducts]);
  };

  return (
    <div className="mb-10">
      <h2 className="text-xl text-slate-300 font-bold mb-2">Add New Product</h2>
      <form
        className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4"
        onSubmit={handleSubmit}
      >
        <Input
          label="title"
          id="ProductsTitle"
          name="ProductsTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          label="quantity"
          type="number"
          id="productsQuantity"
          name="productsQuantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <SelectInput
          label="category"
          id="productsCategory"
          name="productsCategory"
          options={categorys}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">Add New Product</button>
      </form>
    </div>
  );
}

export default AddNewProductForm;
