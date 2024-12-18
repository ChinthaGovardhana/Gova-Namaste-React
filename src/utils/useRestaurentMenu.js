import { MENU_API } from "./constants";
import { useState, useEffect } from "react";

const useRestaurentMenu = (restId) => {
  const [resInfo, setResInfo] = useState(null);

  console.log(restId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + restId);
    const json = await data?.json();

    setResInfo(json?.data);
    console.log(json?.data);
  };
  return resInfo;
};

export default useRestaurentMenu;
