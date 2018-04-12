import React from "react";
import PropTypes from "prop-types";
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import DrawerDataDef from "./DrawerDataDef";

import "./TemporaryDrawer .css";

const styles = {
    list: {
        width: 400,
    },
};

const TemporaryDrawer = ({ classes, currentCard, toggleDrawer }) => {
    const sideList = (
        <div className={classes.list}>
            <List>
                {DrawerDataDef.map((def, index) => (
                    <ListItem key={index}>
                        <ListItemText
                            primary={def.title + ":"}
                        />
                        <ListItemText
                            primary={currentCard ? currentCard[def.category][def.attr] : ""}
                        />
                    </ListItem>))}
            </List>
        </div>
    );

    return (
        <Drawer anchor="right" open={currentCard ? true : false} onClose={() => { toggleDrawer() }} >
            <ListItem>
                <ListItemText
                    primary={currentCard ? currentCard.coreData.number : ""}
                />
            </ListItem>
            <div
                tabIndex={0}
                role="button"
                onClick={() => { toggleDrawer() }}
                onKeyDown={() => { toggleDrawer() }}
            >
                {sideList}
            </div>
        </Drawer>
    )
}

TemporaryDrawer.propTypes = {
};

export default withStyles(styles)(TemporaryDrawer);