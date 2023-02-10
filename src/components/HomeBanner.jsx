import React from "react";
import { Link } from "react-router-dom";

import Button from "./Button";

import classes from "./HomeBanner.module.scss";

const HomeBanner = () => {
  return (
    <div className={classes["home-banner"]}>
      <h1 className={classes["home-banner__heading"]}>
        explore events around the world.
      </h1>
      <p className={classes["home-banner__subtitle"]}>
        Lorem ipsum dolor, sit amet.
      </p>
      <Link to="/events">
        <Button text="explore" />
      </Link>
    </div>
  );
};

export default HomeBanner;
