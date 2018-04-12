import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import Card from '../../containers/Card';
import Pagination from '../../containers/Pagination';

import "./Cards.css";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
});

const Cards = ({ classes, cards }) => {
    const spacing = '16'
    return (
        <div style={{ padding: 20 }}>
            <Grid container className={classes.root} spacing={16}>
                {[0, 1, 2].map(i => (
                    <Grid key={i} item xs={12}>
                        <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                            {[0, 1, 2, 3].map(j => (
                                <Grid key={j} item>
                                    <Card card={cards[i * 4 + j]} index={i * 4 + j} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>)
                )
                }
                <Grid item xs={12}>
                    <Pagination />
                </Grid>
            </Grid>
        </div>)
}

Cards.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cards);