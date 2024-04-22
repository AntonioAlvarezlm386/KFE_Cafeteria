import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
    Button
  } from "@tremor/react";
  import { RiEditLine, RiDeleteBin2Fill  } from '@remixicon/react';

const data = JSON.parse(localStorage.getItem("products"))
  
  const AdminTable = () => (
    <div className="mx-auto max-w-2xl">
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
          {
            data.map((product, index)=> (
                <TableRow key={index}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.availability? "en existencia": "se acabarón"}</TableCell>
                <TableCell>${product.price}</TableCell>
                <TableCell>
                    <Button className="bg-divider w-5 h-8 mr-2"><RiEditLine/></Button>
                    <Button className="bg-divider w-5 h-8"><RiDeleteBin2Fill/></Button>
                </TableCell>
                </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  );
  

  export default AdminTable