import React, { useState } from "react";

function Item({ name, category }) {
  const [inCard, setInCard] =useState(false);
  const itemClass = inCard ? "in-cart" : "";

  const buttonClass = inCard ? "remove" : "add";
  const handleAdd =()=>{
    setInCard(prev => !prev);
  }
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleAdd}>{inCard ? "Remove From Cart": "Add to Cart"}</button>
    </li>
  );
}

export default Item;
