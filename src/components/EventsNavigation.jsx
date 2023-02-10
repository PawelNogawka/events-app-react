import React from "react";
import { Link } from "react-router-dom";

import Wrapper from "./Wrapper";
import Button from "../components/Button";
import classes from "./EventsNavigation.module.scss";

const EventsNavigation = () => {
  return (
    <header className={classes.events}>
      <Wrapper>
        <nav className={classes["events__nav"]}>
          <ul className={classes["events__list"]}>
            <li className={"events__nav-item"}>
              <Link to="/events">
                <Button text="all events" />
              </Link>
            </li>
            <li>
              <Link to="/events/new">
                <Button outline text="new event" />
              </Link>
            </li>
          </ul>
        </nav>
      </Wrapper>
    </header>
  );
};

export default EventsNavigation;
