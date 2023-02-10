import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import classes from "./EventItem.module.scss";

const EventItem = ({ event }) => {
  const { name, img, desc, date } = event;

  const params = useParams();
  const navigate = useNavigate();

  const handleDeleteEvent = () => {
    if (window.confirm("are you sure you want to delete this event?")) {
      fetch(
        `https://events-5d2af-default-rtdb.europe-west1.firebasedatabase.app/events/${params.id}.json`,
        {
          method: "DELETE",
        }
      )
        .then((response) => {
          if (response.ok) {
            console.log("Eventsuccessfully deleted");
          } else {
            throw new Error("Failed to delete event");
          }
        })
        .catch((error) => {
          console.error(error);
        });

      navigate("/");
    }
  };

  return (
    <div className={classes.event}>
      <div className={classes["event__container"]}>
        <div className={classes["event__left"]}>
          <img src={img} alt={name} width={600} />
        </div>
        <div className={classes["event__right"]}>
          <h1 className={classes["event__name"]}>{name}</h1>
          <time className={classes["event__date"]}>{date}</time>
          <p className={classes["event__desc"]}>{desc}</p>
        </div>
      </div>
      <div className={classes["event__btns"]}>
        <Link to="edit" className={classes["event__edit"]}>
          edit
        </Link>
        <button
          onClick={handleDeleteEvent}
          className={classes["event__delete"]}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default EventItem;
