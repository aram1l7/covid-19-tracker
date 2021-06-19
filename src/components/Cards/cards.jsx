import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={4} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textPrimary" gutterBottom>
              Total cases:
            </Typography>
            <Typography variant="h5" className={styles.active}>
              <CountUp start={0} end={confirmed.value} duration={2.75} separator=","></CountUp>
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">COVID-19 active cases</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textPrimary" gutterBottom>
              Recoveries:
            </Typography>
            <Typography variant="h5" className={styles.recoveries}>
              <CountUp start={0} end={recovered.value} duration={2.75} separator=","></CountUp>
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography className={styles.text} variant="body2">Recoveries from COVID-19</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textPrimary" gutterBottom>
              Deaths:
            </Typography>
            <Typography variant="h5" className={styles.dead} >
              <CountUp start={0} end={deaths.value} duration={2.75} separator=","></CountUp>
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Deaths from COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
