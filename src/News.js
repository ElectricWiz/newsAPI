import React from 'react';

function News({ articles }) {
    return (
        <div>
            {articles.map((article, index) => (
                <div key={index}>
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                </div>
            ))}
        </div>
    );
}

export default News;