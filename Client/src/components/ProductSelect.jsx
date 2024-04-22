import { SearchSelect, SearchSelectItem } from "@tremor/react";

const products = JSON.parse(localStorage.getItem("products"));

const ProductSelect = () => {
  return (
    <SearchSelect>
      {
        products.map( (product, index) => (
            <SearchSelectItem value={product.id} key={index} price={product.price} product={product.name}>{product.name}</SearchSelectItem>
        ))
      }
    </SearchSelect>
  );
};

export default ProductSelect;
