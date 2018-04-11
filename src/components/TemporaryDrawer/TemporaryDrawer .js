import React from "react";
import PropTypes from "prop-types";
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';

import "./TemporaryDrawer .css";

const styles = {
    list: {
        width: 250,
    },
};

const TemporaryDrawer = ({ classes, currentCard, toggleDrawer }) => {
    const sideList = (
        <div className={classes.list}>
            {currentCard}
        </div>
    );

    return (
        <Drawer anchor="right" open={currentCard ? true : false} onClose={() => { this.toggleDrawer() }} >
            <div
                tabIndex={0}
                role="button"
                onClick={() => { this.toggleDrawer() }}
                onKeyDown={() => { this.toggleDrawer() }}
            >
                {sideList}
            </div>
        </Drawer>
    )
}

TemporaryDrawer.propTypes = {
};

export default withStyles(styles)(TemporaryDrawer);