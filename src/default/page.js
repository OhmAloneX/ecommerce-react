import React from "react";
import ProductTable from "../component/data-table/datatable";
import data from "./data.json"; // JSON imported correctly

export default function Page() {
  console.log("data loaded", data); // DEBUG: Make sure data is read
  return (
    <div>
      <h1>Product Table</h1>
      <ProductTable items={data} />
    </div>
  );
}