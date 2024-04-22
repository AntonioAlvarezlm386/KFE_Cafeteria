import React from "react";
import AdminTable from "./AdminTable";
import { Divider, Button } from "@tremor/react";

const Admin = () => {
  const token = localStorage.getItem("token");
  return token ? (
    <div className="flex justify-center my-2 flex-col h-screen overflow-y-scroll">
      <AdminTable />
      <Divider className="w-[50%]" />
      <div className="text-center">
        <Button className="w-fit">Agregar producto</Button>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-full">
      <p className="text-red-500">inicia sesión para continuar</p>
    </div>
  );
};

export default Admin;
