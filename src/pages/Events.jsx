import React from "react";
import { json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

import Wrapper from "../components/Wrapper";
import classes from "./Events.module.scss";

const Events = () => {
  const events = useLoaderData();

  const eventsArray = [];

  for (const key in events) {
    eventsArray.push({
      id: key,
      name: events[key].name,
      desc: events[key].desc,
      img: events[key].img,
      date: events[key].date,
    });
  }

  return (
    <section className={classes.events}>
      <Wrapper>
        <EventsList events={eventsArray} />
      </Wrapper>
    </section>
  );
};

export default Events;

export async function loader() {
  const response = await fetch(
    "https://events-5d2af-default-rtdb.europe-west1.firebasedatabase.app/events.json"
  );
  if (!response.ok) {
    return json({ message: "could not fetch events" }, { status: 500 });
  } else {
    return response;
  }
}
