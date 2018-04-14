import React from "react";
import PropTypes from "prop-types";
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

import "./Pagination.css";

const Pagination = ({ currentPageIndex, totalPages, updateCurrentPage, addPage, checkAndAddCache }) => (
    <div>
        <Grid container justify="center" spacing={40}>
            <Grid item>
                <Button onClick={() => { updateCurrentPage(currentPageIndex - 1) }}>Back</Button>
            </Grid>
            <Grid item>
                <div className="page-indicator">Page: {currentPageIndex} of {totalPages}</div>
            </Grid>
            <Grid item>
                <Button onClick={() => { checkAndAddCache(currentPageIndex + 1); updateCurrentPage(currentPageIndex + 1); addPage(currentPageIndex + 1) }}>Next</Button>
            </Grid>
        </Grid>
    </div>
)

Pagination.propTypes = {
    currentPageIndex: PropTypes.number,
    totalPages: PropTypes.node,
    updateCurrentPage: PropTypes.func.isRequired,
    addPage: PropTypes.func.isRequired
};
export default Pagination;