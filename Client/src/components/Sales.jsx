import { Button, Divider } from "@tremor/react";
import SalesTable from "./Table";
import { useState } from "react";
import { sendSale } from "../libs/api";

const userData = JSON.parse(localStorage.getItem("userData"));
const products = JSON.parse(localStorage.getItem("products"));

const Sales = () => {
  const [items, setItems] = useState(1)
  const [productId, setProductId] = useState(1)
  const [change, setChange] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [saleData, setSaleData] = useState({
    user: userData.access_key,
    total: 0,
    products: [],
  });

  const receiptUpdate = () => {
    const selectedProduct = products.find( product => product.id == productId)
    const price = parseFloat(selectedProduct.price)
    const soldProduct = {
      id: selectedProduct.id,
      producto: selectedProduct.name,
      precioU: selectedProduct.price,
      piezas: items,
      subtotal: (price * items).toFixed(2)
    }
    setTableData((prevState) => [...prevState, soldProduct]);
    setSaleData((prevState) => ({
      ...prevState,
      total: ( parseInt(prevState.total) + parseFloat(soldProduct.subtotal)),
      products: [...prevState.products, {id: soldProduct.id, items: soldProduct.piezas}
    ]}));
  };

  const clearReceipt = () =>{
      setTableData([])
      setSaleData(prevState => ({
        ...prevState,
        total:0,
        products: []
      }))
  }

  const onCambioChange = (e) => {
    setChange((e.target.value - saleData.total).toFixed(2));
  };

  const handleClick = async() => {
try {
  await sendSale('sales/', saleData)
  clearReceipt()
} catch (error) {
  console.error('Error al enviar la venta:' + error.message)
}
  }

  return userData.token ? (
    <div className=" overflow-y-scroll h-screen flex justify-center items-center flex-col gap-5 py-5">
      <div className="flex gap-5">
        <div>
          <select name="select" value={productId} onChange={(e) => setProductId(e.target.value)} className="border-accent rounded-md">
            {products.map((product, index) => (
              <option value={product.id} key={index}>
                {product.name}
              </option>
            ))}
          </select>
        </div>

        <input
          onChange={(e) => {setItems(parseInt(e.target.value))}}
          value={items}
          type="number"
          min={1}
          className="rounded-md border-accent w-[5em]"
        />
        <Button
          className="bg-accent hover:bg-primary"
          onClick={receiptUpdate}
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
      <Divider className="w-[80%]" />
      <div>
        <div className="flex">
        <p className="my-2 mr-2">Efectivo recibido: </p>
        <input
          type="number"
          className="rounded-md border-accent w-[5em]"
          onChange={onCambioChange}
        />
        </div>
        <p className="my-2">Cambio: ${change<0 ? '  --' : change}</p>
      </div>
      <Divider className="w-[80%]" />
      <div className="flex gap-3">
        <Button className="bg-accent hover:bg-primary" onClick={clearReceipt}>Cancelar compra</Button>
        <Button className="bg-accent hover:bg-primary" onClick={handleClick}>Confirmar compra</Button>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-full">
      <p className="text-red-500">inicia sesión para continuar</p>
    </div>
  );
};

export default Sales;
