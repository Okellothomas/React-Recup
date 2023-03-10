import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./props.css"

/**
 * 
 * @param {Using props destructuring} param0 
 * @returns 
 */
function Team({img, title, desc, button}) {
  return (
    <Card className='card'>
          <Card.Img variant="top" src={ img} />
      <Card.Body>
              <Card.Title>{ title}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
              <Button variant="primary">{ button}</Button>
      </Card.Body>
    </Card>
  );
}
export default Team