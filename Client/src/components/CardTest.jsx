import { Card} from "@tremor/react";

const CardTest = ({product}) => {
  return (
    <Card className="mx-auto w-[15em]">
      <h2>{product.name}</h2>
      <h4 className="">
        Ventas
      </h4>
      <p className="text-tremor-metric font-semibold text-tremor-content-strong">
      ${product.price*product.totalItemsSold}
      </p>
    </Card>
  );
};

export default CardTest;
