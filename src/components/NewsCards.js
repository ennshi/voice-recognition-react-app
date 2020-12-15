import React from 'react';
import NewsCard from './NewsCard';

const NewsCards = ({ articles }) => {
    const articleCards = articles.map((article, i) => (
        <NewsCard
            key={i}
            article={article}
        />
    ));
    return (
        <section>
            {articleCards}
        </section>
    )
};

export default NewsCards;
