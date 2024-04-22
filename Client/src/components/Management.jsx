import React from "react";
import SalesTable from "./Table";
import CardTest from "./CardTest";
import Graph from "./Graph";
import ProductSelect from "./ProductSelect";
import { DateRangePicker } from "@tremor/react";

const token = localStorage.getItem("token");
async function getTopProducts() {
  try {
    const rawResponse = await fetch(
      "http://localhos:3000/api/products/topproducts",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-access-token": token,
        },
      }
    );
    const topProducts = await rawResponse.json();
    console.log(topProducts);
    return topProducts;
  } catch (error) {
    console.error(error);
  }
}
const topProducts = getTopProducts();

const Management = () => {
  return token ? (
    <div className="flex flex-col gap-5 overflow-y-scroll h-screen p-5">
      <p className="p-1 bg-secondary">Reporte de ventas</p>
      <DateRangePicker enableSelect={false} />
      <SalesTable />

      <p className="p-1 bg-secondary">Productos destacados</p>
      <div className="flex flex-wrap gap-5">
        {topProducts.map((product, index) => (
          <CardTest product={product} key={index} />
        ))}
      </div>

      <p className="p-1 bg-secondary">Análisis de ventas por producto</p>
      <ProductSelect />
      <Graph />
    </div>
  ) : (
    <div className="flex justify-center items-center h-full">
      <p className="text-red-500">inicia sesión para continuar</p>
    </div>
  );
};

export default Management;
