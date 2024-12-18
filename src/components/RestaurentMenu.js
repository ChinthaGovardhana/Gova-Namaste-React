import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurentCategoryCard from "./RestaurentCategoryCard";

const RestaurentMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { restId } = useParams();
  const resInfo = useRestaurentMenu(restId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;

  const categoryCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h2 className="font-bold  my-6 text-2xl">{name}</h2>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} -{costForTwoMessage}
      </p>
      {categoryCards.map((category, index) => (
        <RestaurentCategoryCard
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurentMenu;
