import React from "react";

import HomeBanner from "../components/HomeBanner";
import Wrapper from "../components/Wrapper";

import classes from "./Home.module.scss";

const Home = () => {
  return (
    <section className={classes.home}>
      <Wrapper>
        <div className={classes["home__container"]}>
          <HomeBanner />
        </div>
      </Wrapper>
    </section>
  );
};

export default Home;
