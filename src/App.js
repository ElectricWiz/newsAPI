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
    setArticles(response.data.articles);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    fetchNews();
  }

  return (
    <div className="App">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Form onSubmit={handleSearch}>
            <Form.Group controlId="formKeyWord">
              <Form.Control typle="text" placeholder="Enter keyword" onChange={(e) => setKeyword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <News articles={articles} />
      </Row>
      <Row>
        <TopHeadlines />
      </Row>
    </div>
  );
}

export default App;