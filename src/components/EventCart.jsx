import React from "react";
import { Link } from "react-router-dom";

import Button from "./Button";

import classes from "./EventCart.module.scss";

const EventCart = ({ event }) => {
  const { name, img, desc, date, id } = event;

  return (
    <div className={classes.event}>
      <div className={classes["event__left"]}>
        <img
          className={classes["event__img"]}
          src={img}
          alt={name}
          width={300}
        />
      </div>
      <div className={classes["event__right"]}>
        <h3 className={classes["event__name"]}>{name}</h3>
        <p className={classes["event__date"]}>{date}</p>
        <p className={classes["event__desc"]}>{desc.slice(0, 150)}...</p>
        <Link to={`/events/${id}`} className={classes["event__link"]}>
          <Button text="details" />
        </Link>
      </div>
    </div>
  );
};

export default EventCart;
