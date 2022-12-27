import style from "./header.module.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Header() {

  return (
    <header className={style.header}>
      <div className={style.header__inner}>
        <Link to="/">
          <div className={style.header__logo}></div>
        </Link>
        <div>
          <span className={style.font}>Cart total: €2,697.00</span>
        </div>
        <Link to="basket">
          <div className={style.header__basket}></div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
