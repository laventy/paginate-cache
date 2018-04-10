import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import "./Card.css";

const styles = {
    card: {
        width: 300,
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

const card = {
    state: "New",
    number: "123",
    application: "BENLI",
    assignee: "BENLI",
    shortDescription: "Lucky Lucky"
}

function SimpleCard(props) {
    const { classes } = props;

    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary">
                        {card.state}
                    </Typography>
                    <Typography variant="headline" component="h2">
                        {card.number}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        application: {card.application}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        assignee: {card.assignee}
                    </Typography>
                    <Typography component="p">
                        {card.shortDescription}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);