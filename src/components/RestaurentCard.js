import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.info;
  return (
    <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-400">
      <img
        className="rounded-lg"
        alt="images"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h3>{cuisines.join(",")}</h3>
      <h3>{avgRating} star</h3>
      <h3>${costForTwo}</h3>
      <h3>{deliveryTime} minutes </h3>
    </div>
  );
};

export default RestaurentCard;
