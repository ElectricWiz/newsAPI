import React, { useState } from 'react';
import axios from 'axios';
import News from './News';
import TopHeadlines from './TopHeadlines';
import { Form, Button, Row, Col } from 'react-bootstrap';

import './App.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [keyword, setKeyword] = useState('');

  const fetchNews = async () => {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=437becb6d7574defa144a6c500864d0d`);
    setArticles(response.data.articles.slice(0, 6));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchNews();
  };

  const clearArticles = () => {
    setArticles([]);
  };

  return (
    <div className="App">
      <Row className="justify-content-md-center">
        <Col md="auto">
        <div className='search-container'>
            <Form onSubmit={handleSearch}>
              <Form.Group controlId="formKeyWord">
                <Form.Control typle="text" placeholder="Enter keyword" onChange={(e) => setKeyword(e.target.value)} />
              </Form.Group>
              <Button variant="primary" type="submit" className='button'>
                Search
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
      <Row>
        <News articles={articles} />
      </Row>
      <Row>
        <TopHeadlines />
        <div className='search-container'>
          <button onClick={clearArticles} className='button'>Clear Articles</button>
        </div>
      </Row>
    </div>
  );
}

export default App;