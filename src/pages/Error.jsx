import React from "react";
import { useRouteError } from "react-router-dom";
import Header from "../components/Header";
import classes from "./Error.module.scss";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <Header />
      <section className={classes.error}>
        <p className={classes["error__message"]}>{error.message}</p>
      </section>
    </>
  );
};

export default Error;
