import React, { useState } from "react";


export default function App() {
  const allItems = [
    {
      name: "A1",
      price: "300",
    },
    {
      name: "A2",
      price: "300",
    },
    {
      name: "A3",
      price: "300",
    },
    {
      name: "A4",
      price: "300",
    },
    {
      name: "A5",
      price: "300",
    },
    {
      name: "B1",
      price: "200",
    },
    {
      name: "B2",
      price: "200",
    },
    {
      name: "B3",
      price: "200",
    },
    {
      name: "B4",
      price: "200",
    },
    {
      name: "B5",
      price: "200",
    },
    {
      name: "C1",
      price: "150",
    },
    {
      name: "C2",
      price: "150",
    },
    {
      name: "C3",
      price: "150",
    },
    {
      name: "C4",
      price: "150",
    },
    {
      name: "C5",
      price: "150",
    },
    
  ];
  const [orderedItems, setOrderedItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  

  const handleChange = (item, event) => {
    if (event.target.checked) {
      setOrderedItems((cartItem) => [...cartItem, item]);
      setTotalCost((total) => total + parseInt(item.price));
      // add item to orderedItems array
    } else {
      // remove item from orderedItems array
      setOrderedItems((cartItem) =>
        cartItem.filter((i) => i.name !== item.name)
      );
      setTotalCost((total) => total - parseInt(item.price));
    }
  };
  
  return (
    <div className="PriceCnt">
      {allItems.map((item,index) => (
        <div key={index}>
        <label style={{marginLeft:"5px"}}>
        <input
          style={{marginRight:"5px"}}
          type="checkbox"
          name={item.name}
          onChange={event => handleChange(item, event)}
        />
        <span style={{fontSize:"18px",fontWeight:"600"}}>{item.name} - {item.price} TL</span>
        </label>
        
      </div>
      ))}

      <h4 className="price">Tutar = {totalCost}TL</h4>
    </div>
  );
}
