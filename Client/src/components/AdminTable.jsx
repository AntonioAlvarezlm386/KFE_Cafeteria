import {
  TextInput,
  NumberInput,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Button,
  Dialog,
  DialogPanel,
} from "@tremor/react";
import { RiEditLine, RiDeleteBin2Fill } from "@remixicon/react";
import { deleteProduct } from "../libs/api";
import { useState } from "react";
import { updateProduct } from "../libs/api";

const deleteProductClick = async (id) => {
  const rawResponse = await deleteProduct(id);
  console.log(rawResponse);
};

const AdminTable = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    id: 0,
    name: "",
    price: 0,
    availability: true,
    category: "Bebidas calientes",
  });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const modalClick = (id, name, price, availability, category) => {
    setNewProduct({id: id, name: name, price: price, availability: availability, category: category})
    setIsOpen(!isOpen)
  }

  const updateClick = async() => {
    const rawResponse = await updateProduct(newProduct)
    console.log(rawResponse)
    setIsOpen(!isOpen)
  }

  return (
    <div className="mx-auto max-w-2xl h-[60vh] overflow-y-scroll">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>id</TableHeaderCell>
            <TableHeaderCell>Producto</TableHeaderCell>
            <TableHeaderCell>disponibilidad</TableHeaderCell>
            <TableHeaderCell>precio</TableHeaderCell>
            <TableHeaderCell>Controles</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((product, index) => (
            <TableRow
              key={index}
              className={product.availability ? "" : "bg-red-200"}
            >
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>
                {product.availability ? "en existencia" : "se acabarón"}
              </TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>
                <Button
                  className="bg-divider hover:bg-secondary w-5 h-8 mr-2"
                  onClick={() => modalClick(product.id, product.name, product.price, product.availability, product.category.name)}
                >
                  <RiEditLine className="w-5" />
                </Button>
                <Button
                  className="bg-divider hover:bg-secondary w-8 h-8"
                  onClick={() => deleteProductClick(product.id)}
                >
                  <RiDeleteBin2Fill className="w-5" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
        <DialogPanel>
          <div className="my-2 mx-auto">
            <label>Nombre del producto</label>
            <TextInput
              name="name"
              onChange={handleChange}
              value={newProduct.name}
              className="mx-auto border-black"
            />
            <label htmlFor="">Precio</label>
            <NumberInput
              name="price"
              value={newProduct.price}
              onChange={handleChange}
              className="mx-auto max-w-x  border-black"
            />
            <div className="flex flex-col">
              <label htmlFor="">Disponibilidad</label>
              <select
                name="availability"
                className="rounded-md"
                value={newProduct.availability}
                onChange={handleChange}
              >
                <option value={true}>en existencia</option>
                <option value={false} >no disponible</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Categoria</label>
              <select
                name="category"
                className="rounded-md"
                value={newProduct.category}
                onChange={handleChange}
              >
                <option>Bebidas calientes</option>
                <option>Bebidas frias</option>
                <option>Postres</option>
                <option>Bocadillos</option>
                <option>Extras</option>
              </select>
            </div>
          </div>

          <Button className="mt-8 w-full bg-accent hover:bg-primary" onClick={() => updateClick(newProduct)}>
            Actualizar
          </Button>
        </DialogPanel>
      </Dialog>
    </div>
  );
};

export default AdminTable;
