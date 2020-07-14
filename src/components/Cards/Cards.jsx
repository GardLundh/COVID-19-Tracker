import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import { withStyles } from "@material-ui/core/styles";

import styles from "./Cards.module.css";

//Changes material-ui Typography color to white
const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

//Takes daily data and turns it into Cards showing Global/country data on Covid-19
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <WhiteTextTypography gutterBottom>Infected</WhiteTextTypography>
            <WhiteTextTypography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={1.5}
                separator=","
              ></CountUp>
            </WhiteTextTypography>
            <WhiteTextTypography>
              {new Date(lastUpdate).toDateString()}
            </WhiteTextTypography>
            <WhiteTextTypography variant="body2">
              COVID-19: Number of active cases
            </WhiteTextTypography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <WhiteTextTypography gutterBottom>Recovered</WhiteTextTypography>
            <WhiteTextTypography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={1.5}
                separator=","
              ></CountUp>
            </WhiteTextTypography>
            <WhiteTextTypography>
              {new Date(lastUpdate).toDateString()}
            </WhiteTextTypography>
            <WhiteTextTypography variant="body2">
              COVID-19: Number of recoveries
            </WhiteTextTypography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <WhiteTextTypography gutterBottom>Deaths</WhiteTextTypography>
            <WhiteTextTypography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={1.5}
                separator=","
              ></CountUp>
            </WhiteTextTypography>
            <WhiteTextTypography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </WhiteTextTypography>
            <WhiteTextTypography variant="body2">
              COVID-19: Number of deaths
            </WhiteTextTypography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
