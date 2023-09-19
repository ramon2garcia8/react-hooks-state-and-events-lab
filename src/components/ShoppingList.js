import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleChange(category) {
    setSelectedCategory(category.target.value)
    // console.log("Change detected", category.target.value)
  }
  // filter takes a call back that returns true or false
  const filteredItems = items.filter(item => {
    // If category matches
    if (selectedCategory === item.category) return true
    if (selectedCategory === "All") return true
    else return false
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
