import React from "react";
import Table from "../../ui/Table";
import ProductsRow from "./ProductsRow";

function ProductsTable({filteredProducts}) {
  return (
    <div>
      <Table>
        <Table.Header>
          <th>Title</th>
          <th>Date</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Delete</th>
        </Table.Header>
        <Table.Body>
          {filteredProducts.map((product) => {
            return <ProductsRow key={product.id} product={product} />;
          })}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ProductsTable;
