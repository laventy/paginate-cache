import React from "react";
import PropTypes from "prop-types";
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { debounce } from 'lodash';

import "./Pagination.css";

// Debounced Function used to reduce the unnecessary fetching when user navigates too quickly
const debouncedFunc = debounce((parameter, func) => { func(parameter) }, 250)
const debouncedFunc1 = debounce((parameter, func) => { func(parameter) }, 250)

const Pagination = ({ currentPageIndex, totalPages, updateCurrentPage, addPage, checkAndAddCache }) => {
    return (<div>
        <Grid container justify="center" spacing={40}>
            <Grid item>
                <Button onClick={() => { debouncedFunc(currentPageIndex - 1, checkAndAddCache); updateCurrentPage(currentPageIndex - 1); debouncedFunc1(currentPageIndex - 1, addPage) }}>Back</Button>
            </Grid>
            <Grid item>
                <div className="page-indicator">Page: {currentPageIndex} of {totalPages}</div>
            </Grid>
            <Grid item>
                <Button onClick={() => { debouncedFunc(currentPageIndex + 1, checkAndAddCache); updateCurrentPage(currentPageIndex + 1); debouncedFunc1(currentPageIndex + 1, addPage) }}>Next</Button>
            </Grid>
        </Grid>
    </div>)
}

Pagination.propTypes = {
    currentPageIndex: PropTypes.number,
    totalPages: PropTypes.node,
    updateCurrentPage: PropTypes.func.isRequired,
    addPage: PropTypes.func.isRequired
};
export default Pagination;