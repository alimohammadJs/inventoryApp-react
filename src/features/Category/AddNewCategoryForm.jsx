import React, { useState } from "react";
import Input from "../../ui/Input";

import { useCategory } from "../../context/CategoryProvider";

function AddNewCategoryForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categorys, setCategorys] = useCategory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return null;
    const newCategory = {
      id: new Date().toISOString(),
      title,
      description,
    };
    setCategorys((prev) => [...prev, newCategory]);
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl text-slate-300 font-bold mb-2">
        Add New Category
      </h2>
      <form
        className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4"
        onSubmit={handleSubmit}
      >
        <Input
          label="title"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          label="description"
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add New Category</button>
      </form>
    </div>
  );
}

export default AddNewCategoryForm;
