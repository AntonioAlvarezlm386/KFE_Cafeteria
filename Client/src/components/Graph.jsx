import React from "react";
import { AreaChart } from "@tremor/react";

const dataFormatter = (number) =>  number;

const Graph = ({ data }) => {


  return (
    <AreaChart
    className="my-5"
      data={data}
      index="createdAt"
      categories={["ventas"]}
      colors={["blue"]}
      valueFormatter={dataFormatter}
      minValue={0}
      maxValue={5}
      onValueChange={(v) => console.log(v)}
    />
  );
};

export default Graph;
