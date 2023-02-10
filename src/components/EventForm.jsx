import React from "react";
import { useNavigate, Form } from "react-router-dom";

import Button from "./Button";

import classes from "./EventForm.module.scss";

const EventForm = ({ event }) => {
  const navigate = useNavigate();
  const handleCancelButtonClick = () => {
    navigate("..");
  };
  return (
    <Form method="post" className={classes.form}>
      <div className={classes["form__input-box"]}>
        <label htmlFor="title">Event name:</label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={event && event.name}
          required
        />
      </div>
      <div className={classes["form__input-box"]}>
        <label htmlFor="img">Event image:</label>
        <input
          type="text"
          id="img"
          name="img"
          defaultValue={event && event.img}
          required
        />
      </div>
      <div className={classes["form__input-box"]}>
        <label htmlFor="date">Event starts:</label>
        <input
          type="date"
          id="date"
          name="date"
          defaultValue={event && event.date}
          required
        />
      </div>
      <div className={classes["form__input-box"]}>
        <label htmlFor="txt">Event description:</label>
        <textarea id="txt" name="txt" defaultValue={event && event.desc} required />
      </div>
      <div className={classes["form__btns"]}>
        <Button submit text="confirm" />
        <Button onClick={handleCancelButtonClick} outlined text="cancel" />
      </div>
    </Form>
  );
};

export default EventForm;
