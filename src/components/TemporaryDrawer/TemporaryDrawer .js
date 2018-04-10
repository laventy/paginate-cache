import React from "react";
import PropTypes from "prop-types";
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';

import "./TemporaryDrawer .css";

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

class TemporaryDrawer extends React.Component {
    state = {
        right: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)} >
                <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer('right', false)}
                    onKeyDown={this.toggleDrawer('right', false)}
                >
                    asdasd
                </div>
            </Drawer>
        );
    }
}

TemporaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);