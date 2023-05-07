import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import email from '../../Images/email.png'
import phone from '../../Images/phone.png'
import location from '../../Images/location.png'

import { BsEnvelopeCheck } from 'react-icons/bs';

const ContactUs = () => {
    return (
        <div>
            <Container style={{ marginTop: '150px' }} className='d-flex justify-content-between mb-5'>
                <Card style={{ width: '18rem' }} className='p-3'>
                    <Card.Img variant="top" src={email} className='mx-auto' style={{height:'100px', width:'100px'}} />
                    

                    <Card.Body className='mt-3 text-center'>
                        <Card.Title>Email Address</Card.Title>
                        <Card.Text>
                        info@webmail.com
                        <br />
                        jobs@webexample.com
                        </Card.Text>
                        <button className='main-button'>Email Now</button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className='p-3'>
                    <Card.Img variant="top" src={phone} className='mx-auto' style={{height:'100px', width:'100px'}} />
                    

                    <Card.Body className='mt-3 text-center'>
                        <Card.Title> Phone Number</Card.Title>
                        <Card.Text>
                        +0123-456789 <br />
                        +987-6543210
                        </Card.Text>
                        <button className='main-button'>Email Now</button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className='p-3'>
                    <Card.Img variant="top" src={location} className='mx-auto' style={{height:'100px', width:'100px'}} />
                    

                    <Card.Body className='mt-3 text-center'>
                        <Card.Title>Office Address</Card.Title>
                        <Card.Text>
                        18/A, New Born Town Hall <br />
                        New York, US
                       
                        </Card.Text>
                        <button className='main-button'>Email Now</button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default ContactUs;