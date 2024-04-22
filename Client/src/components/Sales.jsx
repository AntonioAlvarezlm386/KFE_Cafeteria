import { Button, Divider } from "@tremor/react";
import ProductSelect from "./ProductSelect";
import SalesTable from "./Table";
import { useState } from "react";

const key = localStorage.getItem("key");
const token = localStorage.getItem("token");
const products = JSON.parse(localStorage.getItem("products"));

const Sales = () => {
  const [cambio, setCambio] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [saleData, setSaleData] = useState({
    user: key,
    total: 0,
    products: [],
  });

  const [saleDetail, setSaleDetail] = useState({
    id: 0,
    producto: "",
    precioU: 0,
    piezas: 0,
    subtotal: 0,
  });

  const handleSelectChange = (e) => {
    const addProduct = products.find((product) => product.id == e.target.value);
    setSaleDetail((prevState) => ({
      ...prevState,
      id: addProduct.id,
      producto: addProduct.name,
      precioU: addProduct.price,
    }));
  };

  const onCantidadChange = (event) => {
    const cantidad = parseInt(event.target.value);
    setSaleDetail((prevState) => ({
      ...prevState,
      piezas: cantidad,
      subtotal: cantidad * prevState.precioU,
    }));
  };

  const agregarDetalleVenta = () => {
    setSaleData((prevState) => ({
      ...prevState,
      total: prevState.total + saleDetail.subtotal,
      products: [...prevState.products, {id: saleDetail.id, items: saleDetail.piezas}
    ]}));
    setTableData((prevState) => [...prevState, saleDetail]);
  };

  const sendSale = async()=>{
    try {
      console.log(saleData)
      const rawResponse = await fetch("http://localhost:3000/api/sales/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          user: saleData.user,
          total: saleData.total,
          products: saleData.products
        })
      });

      const response = await rawResponse.json()
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  const onCambioChange = (e) => {
    setCambio(e.target.value - saleData.total);
  };
  return token ? (
    <div className="flex justify-center items-center flex-col gap-5 py-5">
      <div className="flex gap-5">
        <div>
          <select name="select" onChange={handleSelectChange}>
            {products.map((product, index) => (
              <option value={product.id} key={index}>
                {product.name}
              </option>
            ))}
          </select>
        </div>

        <input
          onChange={onCantidadChange}
          type="number"
          className="rounded border-accent w-[5em]"
        />
        <Button
          className="bg-accent hover:bg-primary"
          onClick={agregarDetalleVenta}
        >
          Agregar
        </Button>
      </div>
      <Divider className="w-[80%]" />
      <div>
        <SalesTable data={tableData} />
        <p className="text-red-400 font-bold text-right">
          Total: ${saleData.total}
        </p>
      </div>

      {/*      <div className="flex gap-5">
        <Button className="bg-accent">Confirmar</Button>
        {<Button>Eliminar nota</Button>}
      </div>*/}
      <Divider className="w-[80%]" />
      <div>
        <p className="my-2">Efectivo recibido</p>
        <input
          type="number"
          className="rounded border-accent w-[5em]"
          onChange={onCambioChange}
        />
        <p className="my-2">Cambio: {cambio}</p>
      </div>
      <Divider className="w-[80%]" />
      <div>
        <Button className="bg-accent" onClick={sendSale}>Confirmar compra</Button>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-full">
      <p className="text-red-500">inicia sesión para continuar</p>
    </div>
  );
};

export default Sales;
