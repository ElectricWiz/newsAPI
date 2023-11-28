import React from 'react';
import { Row, Col } from 'react-bootstrap';

function News({ articles }) {
    return (
        <div className="article-container">
                {articles.map((article, index) => (
                <div className='articles' key={index}>
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                </div>
            ))}
        </div>
    );
}

export default News;