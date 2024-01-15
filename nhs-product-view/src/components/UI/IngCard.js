import React from "react";
import { useState } from "react";

const BaguetteCard = (props) => {
  const [product, setProduct] = useState(props.items);
  const [selected, setSelected] = useState(undefined);

  return (
    <div className="w-[35%] lg:w-[25%] rounded-lg overflow-hidden shadow-lg bg-gray-100">
      <div className="flex w-full justify-center"></div>
      <div className="flex items-center flex-col">
        <select
          className="w-fit my-5"
          onChange={(e) => {
            const x = e.target.value;
            const i = product.find((obj) => obj.id === parseInt(x));

            setSelected(i);
          }}
        >
          <option value="0">Please Select...</option>
          {product.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="px-6 my-8">
        <div className="font-bold text-[32px] mb-2 text-center">
          <div className="flex justify-around">
            <ul>
              <li>{selected.name}</li>
            </ul>
            <ul>
              <li>{`£${selected.cost}`}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaguetteCard;
