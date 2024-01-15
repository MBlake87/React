import React from "react";
import { useState } from "react";

const BaguetteCard = (props) => {
  const [product, setProduct] = useState(props.items);
  const [selected, setSelected] = useState(undefined);
  const [total, setTotal] = useState(0);

  return (
    <>
      <div className="w-[35%] lg:w-[25%] rounded-lg overflow-hidden shadow-lg bg-gray-100">
        <div className="flex w-full justify-center"></div>
        <div className="flex items-center flex-col">
          <select
            className="w-fit my-5"
            onChange={(e) => {
              const x = e.target.value;
              const i = product.find((obj) => obj.id === parseInt(x));
              setTotal(i.cost.reduce((acc, curr) => acc + curr, 0));
              console.log(total);
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
        <img
          className="w-full px-5"
          src={selected !== undefined ? selected.image : ""}
          alt="img"
        />

        <div className="px-6 my-8">
          <div className="font-bold text-[32px] mb-2 text-center">
            {selected !== undefined ? selected.name : ""}
          </div>
          {selected !== undefined ? (
            <>
              <div className="flex justify-around">
                <ul>
                  {selected.ingredients.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
                <ul>
                  {selected.cost.map((item) => (
                    <li>{`£${item}`}</li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <p>Please Select Item</p>
          )}
        </div>
        <div className="text-center mb-5">
          <p className="font-bold text-xl">Total Cost : £{total} </p>
        </div>
      </div>
    </>
  );
};

export default BaguetteCard;
