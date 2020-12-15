import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import {Grid, Grow, Typography} from '@material-ui/core';
import useStyles from './styles';

const NewsCards = ({ articles }) => {
    const classes = useStyles();
    const articleCards = articles.map((article, i) => (
            <NewsCard
                key={i}
                idx={i}
                article={article}
            />
    ));
    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {articleCards}
            </Grid>
        </Grow>
    )
};

export default NewsCards;
