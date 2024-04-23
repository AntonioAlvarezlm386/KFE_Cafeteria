import React, { useState, useEffect } from "react";
import SalesTableReport from "./SalesTable";
import CardTest from "./CardTest";
import Graph from "./Graph";
import { getTopProducts, getReport, getProductSales } from "../libs/api";
import { DateRangePicker, Button } from "@tremor/react";

const userData = JSON.parse(localStorage.getItem("userData"));
const products = JSON.parse(localStorage.getItem("products"));

const Management = () => {
  const [topProducts, setTopProducts] = useState(null);
  const [reportData, setReportData] = useState(null);
  const [productSales, setProductSales] = useState(null);
  const [dateRange, setDateRange] = useState({});
  const [productId, setProductId] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const topSales = await getTopProducts();
        setTopProducts(topSales);
      } catch (error) {
        console.error("Error al obtener los productos principales:", error);
      }
    };

    fetchData();
  }, []);

  const handleClickReport = async() => {
    try {
      const response = await getReport(dateRange)
      setReportData(response)

    } catch (error) {
      console.error(error);
    }
  }

  const handleClick = async () => {
    try {
      const rawResponse = await getProductSales(productId);
      let tableData = rawResponse.map(sale => ({
        createdAt: sale.createdAt.substr(0,10),
        ventas: sale.sales_details.items
      }))
      setProductSales(tableData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleValueChange = (value) => {
    setDateRange(value)
  }

  return userData.token ? (
    <div className="flex flex-col gap-5 overflow-y-scroll h-screen p-5">
      <p className="p-1 bg-secondary">Reporte de ventas</p>
      <div className="flex gap-5 justify-center">
        <DateRangePicker
          enableSelect={false}
          enableClear={true}
          onValueChange={handleValueChange}
        />
        <Button
          className="bg-accent hover:bg-primary"
          onClick={handleClickReport}
        >
          Obtener
        </Button>
      </div>

      <SalesTableReport data={reportData} />

      <p className="p-1 bg-secondary">Productos destacados</p>
      <div className="flex flex-wrap gap-5">
        {topProducts ? (
          topProducts.map((product, index) => (
            <CardTest data={product} key={index} />
          ))
        ) : (
          <p>obteniendo</p>
        )}
      </div>

      <p className="p-1 bg-secondary">Análisis de ventas por producto</p>
      <div className="flex gap-5 mx-auto">
        <div>
          <select
            name="select"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            className="border-accent rounded-md"
          >
            {products.map((product, index) => (
              <option value={product.id} key={index}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
        <Button className="bg-accent hover:bg-primary" onClick={handleClick}>
          Enviar
        </Button>
      </div>
      <div className="w-[80%] mx-auto">
        <Graph data={productSales} />
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-full">
      <p className="text-red-500">inicia sesión para continuar</p>
    </div>
  );
};

export default Management;
