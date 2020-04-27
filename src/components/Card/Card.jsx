import React from 'react'
import { Card, Typography, Grid, CardContent } from '@material-ui/core';
import styles from './Card.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'

export default function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {


    if (!confirmed) {
        return 'loading'
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={2} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                duration={2.5}
                                separator=","
                                end={confirmed.value}
                            />
                        </Typography>
                        <Typography color="textPrimary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Active cases of covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                duration={2.5}
                                separator=","
                                end={recovered.value}
                            />
                        </Typography>
                        <Typography color="textPrimary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Recovered cases from covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                duration={2.5}
                                separator=","
                                end={deaths.value}
                            />
                        </Typography>
                        <Typography color="textPrimary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Deaths cases cause by covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
