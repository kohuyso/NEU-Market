import React from "react";
// import list from "./data";
import Items from "./Items";

const Carts = ({ handleClick, list }) => {
  console.log("client", list);
  return (
    <section>
      {list.map((item) => (
        <Items key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Carts;
