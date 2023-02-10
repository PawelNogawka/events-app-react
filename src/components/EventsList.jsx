import React from "react";
import { v4 as uuidv4 } from "uuid";

import EventCart from "./EventCart";

import classes from "./EventsList.module.scss";

const EventsList = ({ events }) => {
  return (
    <div className={classes.events}>
      {events.map((event) => (
        <EventCart key={uuidv4()} event={event} />
      ))}
    </div>
  );
};

export default EventsList;
