import React from "react";
import PropTypes from "prop-types";
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText } from 'material-ui/List';

import DrawerDataDef from "./DrawerDataDef";

import "./TemporaryDrawer .css";

const styles = {
    list: {
        width: 600,
    },
};

const isObjEmpty = (obj) => (Object.keys(obj).length === 0 && obj.constructor === Object)

const TemporaryDrawer = ({ classes, currentCard, toggleDrawer }) => {
    // console.log(55)
    // console.log(currentCard)
    const sideList = (
        <div className={classes.list}>
            <List>
                {DrawerDataDef.map((def, index) => (
                    <ListItem key={index}>
                        <ListItemText
                            className="drawer-attr-header"
                            primary={def.title + ":"}
                        />
                        <ListItemText
                            primary={isObjEmpty(currentCard) ? "" : currentCard[def.category][def.attr]}
                        />
                    </ListItem>))}
            </List>
        </div>
    );

    return (
        <Drawer anchor="right" open={isObjEmpty(currentCard) ? false : true} onClose={() => { toggleDrawer() }} >
            <ListItem>
                <ListItemText
                    primary={isObjEmpty(currentCard) ? "" : currentCard.coreData.number}
                    className="drawer-title"
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
    currentCard: PropTypes.object,
    classes: PropTypes.object.isRequired,
    toggleDrawer: PropTypes.func.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);