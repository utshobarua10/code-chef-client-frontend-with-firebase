import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import chefImage from '../../Images/chef.png'
import './Categories.css';
import { Link, useLoaderData } from 'react-router-dom';
import { AiOutlineLike } from "react-icons/ai";


const Categories = () => {
    const data = useLoaderData();
    

    return (
        <div className='mt-5 mb-5'>
            <h3 className='text-center mb-3'>Check The Chef's</h3>
           <Container>
            <Row>
            {
                data.map(chef=> <Col>
                <Card style={{ width: '25rem' }} className='fornt-card mt-3 mx-auto'  >
                <Card.Body className='d-flex justify-content-between align-items-center mt-5 mx-3'>
                    <Card.Title className='text-white' ><span className='fs-2'>{chef.name}</span> <br /> 
                    <Card.Subtitle className=''>    
                        <p className='text-secondary fs-4'>{chef.experience} years of experince</p>
                        
                        <p className='text-light'>{chef.totalRecipe} recipes</p>
                        <p> <AiOutlineLike></AiOutlineLike> {chef.likes} </p>
                    </Card.Subtitle>
                    <Link to={`/chefRecipe/${chef.id}`} style={{textDecoration:'none', color:'#80B501' }}>View Recipe</Link>
                    </Card.Title>
                    <Card.Img src={chef.img} className=' chef-img'  ></Card.Img>
            
                </Card.Body>
            </Card>
                
                </Col>   )
            }   
            </Row>
        

           </Container>
        </div>
    );
};

export default Categories;