import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get"
    );

    const fortniteItems = await data.json();
    // console.log(fortniteItems.data);
    setItems(fortniteItems.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      {items.map((item) => {
        return (
          <h2 key={item.itemId}>
            <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
          </h2>
        );
      })}
    </div>
  );
};

export default Shop;
