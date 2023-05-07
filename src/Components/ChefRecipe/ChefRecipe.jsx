import React from 'react';
import kitchen from '../../Images/kitchen.jpg'
import { Button, Card, Container } from 'react-bootstrap';
import './ChefRecipe.css';
import indianChef from '../../Images/indianChef.jpg'
import { AiOutlineLike } from "react-icons/ai";
import SingleRecipe from '../SingleRecipe/SingleRecipe';
const ChefRecipe = () => {
    return (
        <div style={{ marginTop: '0px' }}>

            <div className='background'>
            </div>
            <div className='mt-5 mb-3'>
         <Container >
         <Card style={{ width: '50rem', marginRight:'10px' }} className='mx-auto'>
                <Card.Body className='d-flex justify-content-between align-items-center mt-5 mx-3'>
                <Card.Img src={indianChef} className='w-50'></Card.Img>
                    <Card.Subtitle className='mx-3'>   
                    <Card.Title ><span className='fs-2'>Jadeja</span> <br /> </Card.Title> 
                        <p className='text-secondary fs-4'>5 years of experince</p>
                        <p className='text-secondary'>10 recipes</p>
                        <p className='text-secondary mx-auto'><p><AiOutlineLike></AiOutlineLike> 5</p></p>
                        <p className='text-secondary'><span className='fs-5'>Bio: </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cum officia. Vero eos mollitia aliquid dolores ex voluptatibus assumenda dignissimos earum, hic optio laudantium. Fugiat reiciendis sed maxime illo itaque?</p>
                    </Card.Subtitle>
                    
                  
                    
                </Card.Body>
            </Card>
         </Container>

            <SingleRecipe></SingleRecipe>

            </div>

        </div>
    );
};

export default ChefRecipe;