import React from "react";
import SalesTableReport from "./SalesTable";
import CardTest from "./CardTest";
import Graph from "./Graph";
import { DateRangePicker, Button } from "@tremor/react";

const token = localStorage.getItem("token");

async function getTopProducts() {
  try {
    const rawResponse = await fetch(
      "http://localhost:3000/api/products/topProducts",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-access-token": token,
        },
      }
    );
    return await rawResponse.json();
  } catch (error) {
    console.error(error);
  }
}
const topProducts = await getTopProducts()

async function getReport() {
  try {
    const rawResponse = await fetch(
      "http://localhost:3000/api/sales/period",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-access-token": token,
        },
      }
    );
    return await rawResponse.json();
  } catch (error) {
    console.error(error);
  }
}
const report = await getReport()

const Management = () => {
  return token ? (
    <div className="flex flex-col gap-5 overflow-y-scroll h-screen p-5">
      <p className="p-1 bg-secondary">Reporte de ventas</p>
      <DateRangePicker enableSelect={false} enableClear={true}/>
      <SalesTableReport data={report}/>

      <p className="p-1 bg-secondary">Productos destacados</p>
      <div className="flex flex-wrap gap-5">
        {
        topProducts.map( (product, index) => (
          <CardTest data={product} key={index}/>
        ))
      }
      </div>

      <p className="p-1 bg-secondary">Análisis de ventas por producto</p>
      <div className="flex">
      <Button className='bg-accent hover:bg-primary'>Enviar</Button>
      </div>
      <Graph/>
    </div>
  ) : (
    <div className="flex justify-center items-center h-full">
      <p className="text-red-500">inicia sesión para continuar</p>
    </div>
  );
};

export default Management;
