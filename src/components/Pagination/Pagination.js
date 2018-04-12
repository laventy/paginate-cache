import React from "react";
import PropTypes from "prop-types";
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

import "./Pagination.css";

const Pagination = ({ currentPage, totalPages, updateCurrentPage }) => (
    <div>
        <Grid container justify="center" spacing={40}>
            <Grid item>
                <Button onClick={() => { updateCurrentPage(currentPage - 1) }}>Back</Button>
            </Grid>
            <Grid item>
                <div className="page-indicator">{currentPage} of {totalPages}</div>
            </Grid>
            <Grid item>
                <Button onClick={() => { updateCurrentPage(currentPage + 1) }}>Next</Button>
            </Grid>
        </Grid>
    </div>
)

export default Pagination;