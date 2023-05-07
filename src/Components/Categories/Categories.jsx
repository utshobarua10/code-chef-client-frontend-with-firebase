import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import chef from '../../Images/chef.png'
import './Categories.css';
import { Link } from 'react-router-dom';
import { AiOutlineLike } from "react-icons/ai";


const Categories = () => {
    return (
        <div className='mt-5 mb-5'>
           <Container className='sm: d-flex'>
           
           <Card style={{ width: '25rem', marginRight:'10px' }} className='fornt-card'>
                <Card.Body className='d-flex justify-content-between align-items-center mt-5 mx-3'>
                    <Card.Title className='text-white' ><span className='fs-2'>FunSung Wangru</span> <br /> 
                    <Card.Subtitle className='my-3'>    
                        <p className='text-secondary fs-4'>5 years of experince</p>
                        <p className='text-light'>10 recipes</p>
                        <p>5 <AiOutlineLike></AiOutlineLike></p>
                    </Card.Subtitle>
                    <Link style={{textDecoration:'none', color:'#80B501' }}>View Recipe</Link>
                    </Card.Title>
                    <Card.Img src={chef} className='w-50'></Card.Img>
                    
                </Card.Body>
            </Card>

            <Card style={{ width: '25rem', marginRight:'10px' }} className='fornt-card'>
                <Card.Body className='d-flex justify-content-between align-items-center mt-5 mx-3'>
                    <Card.Title className='text-white' ><span className='fs-2'>FunSung Wangru</span> <br /> 
                    <Card.Subtitle className='my-3'>    
                        <p className='text-secondary fs-4'>5 years of experince</p>
                        <p className='text-light'>10 recipes</p>
                        <p>5 <AiOutlineLike></AiOutlineLike></p>
                    </Card.Subtitle>
                    <Link style={{textDecoration:'none', color:'#80B501' }}>View Recipe</Link>
                    </Card.Title>
                    <Card.Img src={chef} className='w-50'></Card.Img>
                    
                </Card.Body>
            </Card>



            

            <Card style={{ width: '25rem', marginRight:'10px' }} className='fornt-card'>
                <Card.Body className='d-flex justify-content-between align-items-center mt-5 mx-3'>
                    <Card.Title className='text-white' ><span className='fs-2'>FunSung Wangru</span> <br /> 
                    <Card.Subtitle className='my-3'>    
                        <p className='text-secondary fs-4'>5 years of experince</p>
                        <p className='text-light'>10 recipes</p>
                        <p>5 <AiOutlineLike></AiOutlineLike></p>
                    </Card.Subtitle>
                    <Link style={{textDecoration:'none', color:'#80B501' }}>View Recipe</Link>
                    </Card.Title>
                    <Card.Img src={chef} className='w-50'></Card.Img>
                    
                </Card.Body>
            </Card>
           </Container>
        </div>
    );
};

export default Categories;