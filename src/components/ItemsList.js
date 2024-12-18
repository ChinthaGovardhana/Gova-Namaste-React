import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemsList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-grey-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                {" "}
                ₹-
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>

            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-2">
            <div className="absolute">
              <button
                className="p-2 mx-5 bg-black text-white rounded-lg shadow-lg"
                onClick={() => handleAddItem(item)}
              >
                ADD +
              </button>
            </div>
            <img src={CDN_URL + item?.card?.info?.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
