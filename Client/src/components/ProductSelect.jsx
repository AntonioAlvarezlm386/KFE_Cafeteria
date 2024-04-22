import { SearchSelect, SearchSelectItem } from "@tremor/react";
import { useState } from "react";

const products = JSON.parse(localStorage.getItem("products"));

const ProductSelect = () => {
  const [selectValue, setSelectValue] = useState({});
  const handleSelectChange = (e) => {
    setSelectValue(e.target);
    console.log(selectValue);
  };

  return (
    <div>
      <select name="select" value={selectValue} onChange={HashChangeEvent}>
        
        {
          products.map( (product, index)=> (
            <option value={product.id} key={index}>{product.name}</option>
          ))
        }

      </select>
    </div>
  );
};

export default ProductSelect;
