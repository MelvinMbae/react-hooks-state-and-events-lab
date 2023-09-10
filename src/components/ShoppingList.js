import React, { useState } from "react";
import Item from "./Item";


function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategories] = useState("All")

  console.log(items)

  function handleClick(e) {
    setSelectedCategories(e.target.value)
  }

  const displayItems = items.filter((item) => {
    if (selectedCategory === "All") return true

    else return item.category === selectedCategory
  })


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter">
          <option onChange={handleClick} value="All">Filter by category</option>
          <option onChange={handleClick} value="Produce">Produce</option>
          <option onChange={handleClick} value="Dairy">Dairy</option>
          <option onChange={handleClick} value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
