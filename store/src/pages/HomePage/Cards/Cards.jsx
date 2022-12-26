import React, { useState } from "react";
import Card from "../../../components/Card/Card";
import FindSection from "../../../components/FindSection/FindSection";
import Preloader from "../../../components/Preloader/Preloader";
import style from "./cards.module.css";

function Cards({
  products,
  isLoading
}) {
  const [searchValue, setSearchValue] = useState("");
  const [sortType, setSortType] = useState({
    name: "Sort by price DEC",
    sortProperty: "price",
  });

  const obj = [...products];

  switch (sortType.sortProperty) {
    case "price":
      obj.sort((a,b) => a.price - b.price);
      break;
    case "-price":
      obj.sort((a,b) => b.price - a.price);
      break;
    case "rating":
      obj.sort((a,b) => a.rating - b.rating);
      break;
    case "-rating":
      obj.sort((a,b) => b.rating - a.rating);
      break;
    case "discountPercentage":
      obj.sort((a,b) => a.discountPercentage - b.discountPercentage);
      break;
    case "-discountPercentage":
      obj.sort((a,b) => b.discountPercentage - a.discountPercentage);
      break;
    default:
      break;
  }


  const items = obj.filter(elem => {
    if (elem.title.toLowerCase().includes(searchValue.toLowerCase())) {
      return true
    }
    return false
  }).map((item) => <Card key={item.id} item={item}/>)

  return (
    <div className={style.cards__container}>
      <FindSection
        products={products}
        sortType={sortType}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onClickSortType={(i) => setSortType(i)}
      />
      <div className={style.cards__content}>
        {isLoading
          ? <Preloader/>
          : items}
      </div>
    </div>
  );
}

export default Cards;
