import React from 'react';

const NewsCard = ({ article }) => {
    return (
        <article>
            <h2>{article.title}</h2>
        </article>
    )
};

export default NewsCard;
