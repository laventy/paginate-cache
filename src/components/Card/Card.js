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

const SimpleCard = ({ classes, card, index, toggleDrawer }) => {
    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary">
                        {card.coreData ? card.coreData.state : 'No Content'}
                    </Typography>
                    <Typography variant="headline" component="h2">
                        {card.coreData ? card.coreData.number : 'No Content'}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        application: {card.coreData ? card.coreData.application : ''}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        assignee: {card.coreData ? card.coreData.assignee : ''}
                    </Typography>
                    <Typography component="p">
                        {card.coreData && card.coreData.shortDescription ? card.coreData.shortDescription : "No Description"}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => { toggleDrawer(index) }}>Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
}

SimpleCard.propTypes = {
    card: PropTypes.object,
    index: PropTypes.number.isRequired,
    toggleDrawer: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);