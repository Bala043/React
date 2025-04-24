import { useState, useEffect } from 'react';
import { LAND_PAGE } from './constants';
const useLandingPage = () => {
  const [listOfRestuarents, setListOfRestuarents] = useState([]);
  const [Dummy, setDummy] = useState(null);
  const [nextOffset, setNextOffset] = useState(null); // ✅ fixed variable name
  useEffect(() => {
    handleData();
  }, []);
  async function handleData() {
    const url = await fetch(LAND_PAGE);
    const jsonData = await url.json();
    const restaurants = jsonData.data?.cards[1]?.card.card.gridElements.infoWithStyle.restaurants;
    setListOfRestuarents(restaurants);
    setDummy(restaurants);
    setNextOffset(jsonData?.data?.pageOffset?.nextOffset); // ✅ consistent name
  }
  async function handleMoreData() {
    if (!nextOffset) return; // ✅ fixed typo
    const requestBody = {
      lat: "11.01020",
      lng: "76.97010",
      nextOffset: nextOffset,
      page_type: "DESKTOP_WEB_LISTING"
    }; // 🪵 log for debugging
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    });
    const jData = await response.json();
    const newRestaurants = jData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    const updatedOffset = jData?.data?.pageOffset?.nextOffset;
    if (newRestaurants) {
      setListOfRestuarents((prev) => [...prev, ...newRestaurants]);
      setNextOffset(updatedOffset); // ✅ update correctly
    }
  }
  return [listOfRestuarents, Dummy, setDummy, handleMoreData];
};
export default useLandingPage;
