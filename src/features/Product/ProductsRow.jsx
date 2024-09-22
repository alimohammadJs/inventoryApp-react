import React from "react";
import Table from "../../ui/Table";
import useProducts from "../../context/ProductsProvider";

function ProductsRow({ product }) {
  const [products, setProducts] = useProducts();

  const handleDelete = (e) => {
    const filteredProducts = products.filter((p) => p.id !== product.id);
    setProducts(filteredProducts);
  };
  return (
    <Table.Row>
      <td>{product.title}</td>
      <td>
        {new Date(product.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })}
      </td>
      <td>{product.category}</td>
      <td className="flex justify-center items-center">
        <span
          className="flex items-center justify-center w-10 h-10 
        bg-slate-500 text-slate-100 border-2 border-slate-100 rounded-full"
        >
          {product.quantity}
        </span>
      </td>
      <td>
        <button
          className="text-red-400 border border-red-400 rounded-2xl 
          pl-2 pr-2 pt-1 pb-1 bg-transparent text-center cursor-pointer"
          onClick={handleDelete}
        >
          DELETE
        </button>
      </td>
    </Table.Row>
  );
}

export default ProductsRow;
