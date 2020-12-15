import React, {createRef, useEffect, useState} from 'react';
import { Grid, Card, CardActionArea, CardMedia, Typography, CardContent, CardActions, Button } from '@material-ui/core';
import classNames from 'classnames';

import useStyles from './styles';

const NewsCard = (
    {
        article:
            { title, description, publishedAt, source, url, urlToImage },
        idx,
        activeArticle
    }
) => {
    const classes = useStyles();
    const [elRefs, setElRefs] = useState([]);
    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);
    useEffect(() => {
        setElRefs(refs => Array(20).fill(-1).map((_, i) => (refs[i] || createRef())));
    }, []);
    useEffect(() => {
        if(idx === activeArticle && elRefs[activeArticle]) {
            scrollToRef(elRefs[activeArticle]);
        }
    }, [idx, activeArticle, elRefs]);
    return (
        <Grid ref={elRefs[idx]} item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            <Card className={classNames(classes.card,
                activeArticle === idx ?
                    classes.activeCard : null)}
            >
                <CardActionArea href={url} target="_blank" rel="noreferrer">
                    <CardMedia
                        image={urlToImage || 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'}
                        className={classes.media}
                    />
                    <div className={classes.details}>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="h2"
                        >
                            {(new Date(publishedAt)).toDateString()}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="h2"
                        >
                            {source.name}
                        </Typography>
                    </div>
                    <Typography variant="h5" gutterBottom className={classes.title}>
                        {title}
                    </Typography>
                    <CardContent>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                    <Button
                        size="small"
                        color="primary"
                    >
                        Learn More
                    </Button>
                    <Typography variant="h5" color="textSecondary">
                        {idx + 1}
                    </Typography>
                </CardActions>
            </Card>
        </Grid>
    )
};

export default NewsCard;
