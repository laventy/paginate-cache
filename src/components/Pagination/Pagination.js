import React from "react";
import PropTypes from "prop-types";
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

import "./Pagination.css";

function Pagination(props) {
    return (
        <div>
            <Grid container justify="center" spacing={40}>
                <Grid item>
                    <Button>Back</Button>
                </Grid>
                <Grid item>
                    <div className="page-indicator">{props.currentPage} of {props.totalPages}</div>
                </Grid>
                <Grid item>
                    <Button>Next</Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default Pagination;