import React, { useEffect, useState } from "react";

const ItemDetails = ({ match }) => {
  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const data = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );

    const dataJson = await data.json();
    setItem(dataJson);
  };

  useEffect(() => {
    fetchItem();
  }, []);

  //   console.log(item);
  return (
    <div>
      {item.data ? <h1>{item.data.item.name}</h1> : <h1>Loading...</h1>}
      {item.data && item.data.item && (
        <img src={item.data.item.images.icon} alt="" />
      )}
    </div>
  );
};

export default ItemDetails;
