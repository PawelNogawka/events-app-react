import React from "react";
import { json, useRouteLoaderData } from "react-router-dom";

import Wrapper from "../components/Wrapper";
import EventItem from "../components/EventItem";

import classes from "./EventDetail.module.scss";

const EventDetail = () => {
  const event = useRouteLoaderData("event");

  return (
    <section className={classes["event-detail"]}>
      <Wrapper>
        <EventItem event={event} />
      </Wrapper>
    </section>
  );
};

export default EventDetail;

export async function loader({ request, params }) {
  const id = params.id;

  const response = await fetch(
    `https://events-5d2af-default-rtdb.europe-west1.firebasedatabase.app/events/${id}.json`
  );
  if (!response.ok) {
    throw json(
      { message: "could not fetch events for selected event" },
      { status: 500 }
    );
  } else {
    return response;
  }
}
