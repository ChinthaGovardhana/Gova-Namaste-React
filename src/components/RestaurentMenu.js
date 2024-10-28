import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurentMenu = () => {
  const { restId } = useParams();
  const resInfo = useRestaurentMenu(restId);

  if (resInfo === null) {
    return <Shimmer />;
  }
  console.log(resInfo?.cards[2]?.card?.card?.info);
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;
  console.log(
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card
  );
  return (
    <div className="menu">
      <h2>{name}</h2>
      <p>
        {cuisines.join(", ")} -{costForTwoMessage}
      </p>
      <h3>Menu</h3>
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card.info?.name} -{"Rs."}
            {item?.card?.info?.price / 100}
          </li>
        ))}
        {/* <li>{itemCards[0]?.card.info?.name}</li>
        <li>Burgers</li> */}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
