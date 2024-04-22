import { Card } from "@tremor/react";

const CardTest = ({ data }) => {
  return (
    <Card className="mx-auto w-[15em]">
      <h2 className="border-b border-secondary">{data.name}</h2>
      <div>
        <div>
          <h4 className="">Vendidos</h4>
          <p className="text-tremor-metric font-semibold text-tremor-content-strong">
            {data.totalItemsSold}
          </p>
        </div>
        <div>
          <h4 className="">Ingresos</h4>
          <p className="text-tremor-metric font-semibold text-tremor-content-strong">
            ${data.price * data.totalItemsSold}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default CardTest;
