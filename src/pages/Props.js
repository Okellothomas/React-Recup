import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Props(props) {
    console.log(props)
  return (
    <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ props.img} />
      <Card.Body>
              <Card.Title>{ props.title}</Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text>
              <Button variant="primary">{ props.button}</Button>
      </Card.Body>
    </Card>
  );
}

export default Props;