import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';

const ResumeData = () => {
  return (
    <>
      <CardColumns>
        <Card
          bg={'success'}
          text={'light'}
        >
          <Card.Body className="pb-5">
            <Card.Title>Casos recuperados</Card.Title>
            
            <Card.Text>
              <h1 className="text-light float-right">
                52.222
              </h1>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          bg={'warning'}
          text={'light'}
        >
          <Card.Body className="pb-5">
            <Card.Title>Casos confirmados</Card.Title>
            
            <Card.Text>
              <h1 className="text-light float-right">
                1.000.000
              </h1>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          bg={'danger'}
          text={'light'}
        >
          <Card.Body className="pb-5">
            <Card.Title>Óbitos confirmados</Card.Title>
            
            <Card.Text>
              <h1 className="text-light float-right">
                52.222
              </h1>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardColumns>
    </>
  );
}

export default ResumeData;
