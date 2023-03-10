import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./props.css"

/**
 * 
 * @param {Using props} props 
 * @returns 
 */
function Props(props) {
  return (
    <Card className='card'>
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