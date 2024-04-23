import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
  } from "@tremor/react";
  
  const SalesTableReport = ({data}) => (
    <div className="mx-auto max-w-2xl">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>id</TableHeaderCell>
            <TableHeaderCell>Producto</TableHeaderCell>
            <TableHeaderCell>Piezas</TableHeaderCell>
          </TableRow>
        </TableHead>
  
        <TableBody>
          { data? 
            data.map((product, index)=> (
                <TableRow key={index}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.items}</TableCell>
                </TableRow>
            )) : ""
          } 
        </TableBody>
      </Table>
    </div>
  );
  

  export default SalesTableReport