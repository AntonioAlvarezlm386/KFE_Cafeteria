import {Button, Divider } from "@tremor/react";
import ProductSelect from "./ProductSelect";
import SalesTable from "./Table";
import { useState } from "react";

const key = localStorage.getItem("key");
const token = localStorage.getItem("token");

const Sales = () => {
  const [cambio, setCambio] = useState(0)
  const [saleData, setSaleData] = useState({
    user: key,
    total: 0,
    products: [],
  });

  const [tableData, setTableData] = useState([]);
  const [ saleDetail, setSaleDetail ] = useState({
    id: 0,
    producto: "",
    precioU: 0,
    piezas: 0,
    subtotal: 0
  })

  const onSelectChange = (event) => {
    setSaleDetail(prevState => ({
      ...prevState,
      id: e.target.value,
      producto: e.target.product,
      precioU: e.target.price
    }));
  };

  const onCantidadChange = (event) => {
    const cantidad = parseInt(event.target.value);
    setSaleDetail(prevState => ({
      ...prevState,
      piezas: cantidad,
      subtotal: cantidad * prevState.precioU
    }));
  };

  const onCambioChange = (e) => {
    setCambio(e.target.value-saleData.total)
  }

  const agregarDetalleVenta = () => {
    setTableData(prevState => [...prevState, saleDetail]);
  };

  return token ? (
    <div className="flex justify-center items-center flex-col gap-5 py-5">
      <div className="flex gap-5">
        <ProductSelect onChange={onSelectChange}/>
        <input onChange={onCantidadChange} type="number" className="rounded border-accent w-[5em]" />
        <Button className="bg-accent hover:bg-primary" onClick={agregarDetalleVenta}>Agregar</Button>
      </div>
      <Divider className="w-[80%]" />
      <div>
        <SalesTable data={tableData} />
      </div>
  
{/*      <div className="flex gap-5">
        <Button className="bg-accent">Confirmar</Button>
        {<Button>Eliminar nota</Button>}
      </div>*/}
      <Divider className="w-[80%]" />
      <div>
        <p className="my-2">Efectivo recibido</p>
        <input type="number" className="rounded border-accent w-[5em]" onChange={onCambioChange}/>
        <p className="my-2">Cambio: {cambio}</p>
      </div>
      <Divider className="w-[80%]" />
      <div>
        <Button className="bg-accent">Confirmar compra</Button>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-full">
      <p className="text-red-500">inicia sesión para continuar</p>
    </div>
  );
};

export default Sales;
