import React from "react";
// Make sure the path matches the file exactly
import ProductTable from "../component/data-table/datatable";

export default function Page() {
  return (
    <div>
      <h1>Product Page</h1>
      <ProductTable />
    </div>
  );
}