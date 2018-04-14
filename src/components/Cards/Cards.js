import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';

import Card from '../../containers/Card';
import LinearProgresser from '../LinearProgresser';

import "./Cards.css";

const spacing = '16'

class Cards extends React.Component {
    componentDidMount() {
        this.props.addPage(1, true);
        this.props.addCache(2, 4);
    }

    buildCardsLayout = () => (
        [0, 1, 2].map(i => (
            <Grid key={i} item xs={12}>
                <Grid container justify="center" spacing={Number(spacing)}>
                    {[0, 1, 2, 3].map(j => (
                        <Grid key={j} item>
                            <Card card={this.props.cards ? this.props.cards[i * 4 + j] : {}} index={i * 4 + j} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>)
        )
    )

    render() {
        return (
            <div>
                {this.props.cards ? "" : <LinearProgresser />}
                {this.buildCardsLayout()}
            </div>
        )
    }
}

Cards.propTypes = {
    cards: PropTypes.array,
    addPage: PropTypes.func.isRequired,
};

export default Cards;