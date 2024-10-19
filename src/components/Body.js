import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [filteredRestaurent, setFilteredRestaurent] = useState([])
  const [searchedText, setSearchedText] = useState("");

  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json()
    setListOfRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log(listOfRestaurents)
  }
  return listOfRestaurents?.length === 0 ? (<Shimmer />) :
    (<div className="body">
      <div className="filter">
        <div className="search">
          <input type="text"
            className="search-box"
            value={searchedText}
            onChange={(e) => {
              setSearchedText(e.target.value)
            }} />
          <button onClick={() => {
            filteredRestaurents = listOfRestaurents.filter(
              (res) => res.info.name.toLowerCase().includes(searchedText.toLowerCase())
            )
            setFilteredRestaurent(filteredRestaurents)
          }}>Search</button>

        </div>
        <button className="filter-btn"
          onClick={() => {
            filteredRestaurents = listOfRestaurents.filter(
              (res) => res.info.avgRating > 4
            )
            setListOfRestaurents(filteredRestaurents)
          }}>Top Rated Restaurents</button>
      </div>
      <div className="res-container">
        {filteredRestaurent.map(restaurent => <RestaurentCard key={restaurent?.info?.id} resData={restaurent} />)}
      </div>
    </div>
    )

}

export default Body;