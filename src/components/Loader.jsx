import React from "react";

import { Hearts } from "react-loader-spinner";

import classes from "./Loader.module.scss";

const Loader = () => {
  return (
    <section className={classes.loader}>
      <Hearts
        height="80"
        width="80"
        color="#fa5d43"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </section>
  );
};

export default Loader;
