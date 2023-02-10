import React, { useState, useEffect } from "react";
import {Link, NavLink, useLocation } from "react-router-dom";
import Wrapper from "./Wrapper";
import classes from "./Header.module.scss";


const MainNavigation = () => {
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(true);

  useEffect(() => {
      if(location.pathname === '/'){
        setIsHomePage(true)
      }
      else{
        setIsHomePage(false)
      }
  }, [location]);

  return (
    <header className={classes.header}>
      <Wrapper>
        <nav className={classes["header__nav"]}>
          <Link className={`${classes["header__logo"]} ${isHomePage && classes['header__logo--white']}`} to="/">
            logo.
          </Link>
          <ul className={classes["header__list"]}>
            <li className={`${classes["header__item"]} ${isHomePage && classes['header__item--white']}`}>
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                events
              </NavLink>
            </li>
          </ul>
        </nav>
      </Wrapper>
    </header>
  );
};

export default MainNavigation;
