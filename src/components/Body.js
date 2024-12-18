import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  const [searchedText, setSearchedText] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
    const json = await data.json();
    console.log(json);
    setListOfRestaurents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    const groupedCardData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=671928&catalog_qa=undefined&query=Biryani&submitAction=ENTER"
    );
    const groupedCardJsonData = await groupedCardData.json();
    console.log(groupedCardJsonData);
    console.log(listOfRestaurents);
  };

  if (onlineStatus === false) return <h1>Look like ur offline</h1>;

  return listOfRestaurents?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchedText}
            onChange={(e) => {
              setSearchedText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              filteredRestaurents = listOfRestaurents.filter((res) =>
                res.info.name.toLowerCase().includes(searchedText.toLowerCase())
              );
              setFilteredRestaurent(filteredRestaurents);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              filteredRestaurents = listOfRestaurents.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurents(filteredRestaurents);
            }}
          >
            Top Rated Restaurents
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurent.map((restaurent) => (
          <Link
            to={"/restaurent/" + restaurent?.info?.id}
            key={restaurent?.info?.id}
          >
            <RestaurentCard resData={restaurent} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
