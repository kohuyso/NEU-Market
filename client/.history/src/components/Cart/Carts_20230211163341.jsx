import React from "react";
<<<<<<< HEAD
import list from "./data";
import Items from "./Items";

const Carts = ({handleClick}) => {
    return (
        <section>
            {
                list.map((item) => (
                    <Items key={item.id} item={item} handleClick={handleClick} />
                ))
            }
        </section>
    );
}

export default Carts;
=======
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
>>>>>>> f2473bb5a038ae498934cacf1619617549de6286
