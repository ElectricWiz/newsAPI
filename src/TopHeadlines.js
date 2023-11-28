import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Alert from 'react-bootstrap/Alert';

function TopHeadlines() {
    const [headlines, setHeadlines] = useState([]);

    useEffect(() => {
        const fetchHeadlines = async () => {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=437becb6d7574defa144a6c500864d0d`);
            setHeadlines(response.data.articles.slice(0, 3));
        };

        fetchHeadlines();
    }, []);

    return (
        <Alert variant="warning" className='headline-container'>
            {headlines.map((headline, index) => (
                <div key={index} className='headline'>
                    <h2>{headline.title}</h2>
                    <p>{headline.description}</p>
                </div>
            ))}
        </Alert>
    );
}

export default TopHeadlines;