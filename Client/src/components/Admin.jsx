import React from "react";
import AdminTable from "./AdminTable";
import { Divider, Button, TextInput, NumberInput } from "@tremor/react";
import { useState } from "react";
import { createProduct, getProducts } from "../libs/api";


const products = JSON.parse(localStorage.getItem("products"));

const Admin = () => {
  const [productsList, setProductsList] = useState(products);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    availability: true,
    category: "Bebidas calientes",
  });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const createProductButton = async () => {
    try {
      const rawResponse = await createProduct(newProduct);
      const {id, name, availability, price} = rawResponse
      const createdProduct = {
        id, name, availability, price
      }
      setProductsList((prevState) => [...prevState, createdProduct]);
    } catch (error) {
      console.error(error);
    }
  };

  const userData = JSON.parse(localStorage.getItem("userData"));
  return userData.token ? (
    <div className="flex justify-center flex-col h-full overflow-y-scroll w-full relative py-6">
      <p className="p-1 bg-secondary w-[80%] mx-auto">Productos</p>
      <div>
        <AdminTable data={productsList} />
      </div>
      <hr className="w-[80%] mx-auto my-5" />
      <p className="p-1 bg-secondary w-[80%] mx-auto">Agregar nuevo producto</p>
      <div className="my-2 mx-auto">
        <label htmlFor="">Nombre del producto</label>
        <TextInput
          name="name"
          onChange={handleChange}
          value={newProduct.name}
          className="mx-auto max-w-xs  border-black"
        />
        <label htmlFor="">Precio</label>
        <NumberInput
          name="price"
          value={newProduct.price}
          onChange={handleChange}
          className="mx-auto max-w-x  border-black"
        />
        <div className="flex flex-col">
          <label htmlFor="">Categoria</label>
          <select name="" className="rounded-md" value={newProduct.availability} onChange={handleChange}>
            <option>Bebidas calientes</option>
            <option>Bebidas frias</option>
            <option>Postres</option>
            <option>Bocadillos</option>
            <option>Extras</option>
          </select>
        </div>
      </div>
      <div className="text-center">
        <Button className="w-fit bg-accent hover:bg-primary" onClick={createProductButton}>
          Agregar producto
        </Button>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-full">
      <p className="text-red-500">inicia sesión para continuar</p>
    </div>
  );
};

export default Admin;
