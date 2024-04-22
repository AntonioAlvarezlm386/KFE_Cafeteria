import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

const SalesTable = ({data}) => (
  <div className="mx-auto max-w-2xl">
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>id</TableHeaderCell>
          <TableHeaderCell>Producto</TableHeaderCell>
          <TableHeaderCell>Precio/U</TableHeaderCell>
          <TableHeaderCell>Piezas</TableHeaderCell>
          <TableHeaderCell>Subtotal</TableHeaderCell>
        </TableRow>
      </TableHead>

      <TableBody>
      {
            data.map((product, index)=> (
                <TableRow key={index}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.producto}</TableCell>
                <TableCell>{product.precioU}</TableCell>
                <TableCell>{product.piezas}</TableCell>
                <TableCell>{product.subtotal}</TableCell>
                </TableRow>
            ))
          }
      </TableBody>
    </Table>
  </div>
);


export default SalesTable