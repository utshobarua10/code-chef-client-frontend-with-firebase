import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import cardImage from '../../Images/banner-1.jpg'

const News = () => {
    return (
        <div>
            <h3 className='text-center'>Latest News</h3>
            <Container className='d-flex justify-content-between'>
                <Card style={{ width: '20rem' }} className='p-3'>
                    <Card.Img variant="top" src={cardImage}/>
                    <Card.Body className='mt-3'>
                        <Card.Title>Imprtance of Garlic</Card.Title>
                        <Card.Text>
                        Garlic offers an immune system boost to help prevent colds and the flu virus. Children get six to eight colds each year, while adults get two to four. 
                        </Card.Text>
                        <Button className='main-button'>Full News</Button>
                    </Card.Body>
                </Card>


                <Card style={{ width: '20rem' }} className='p-3'>
                    <Card.Img variant="top" src={cardImage}/>
                    <Card.Body className='mt-3'>
                        <Card.Title>Imprtance of Garlic</Card.Title>
                        <Card.Text>
                        Garlic offers an immune system boost to help prevent colds and the flu virus. Children get six to eight colds each year, while adults get two to four. 
                        </Card.Text>
                        <Button className='main-button'>Full News</Button>
                    </Card.Body>
                </Card>


                <Card style={{ width: '20rem' }} className='p-3'>
                    <Card.Img variant="top" src={cardImage}/>
                    <Card.Body className='mt-3'>
                        <Card.Title>Imprtance of Garlic</Card.Title>
                        <Card.Text>
                        Garlic offers an immune system boost to help prevent colds and the flu virus. Children get six to eight colds each year, while adults get two to four. 
                        </Card.Text>
                        <Button className='main-button'>Full News</Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default News;