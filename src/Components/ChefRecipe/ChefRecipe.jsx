import React from 'react';
import kitchen from '../../Images/kitchen.jpg'
import { Button, Card, Container } from 'react-bootstrap';
import './ChefRecipe.css';
import indianChef from '../../Images/indianChef.jpg'
import { AiOutlineLike } from "react-icons/ai";
import SingleRecipe from '../SingleRecipe/SingleRecipe';
import { useLoaderData } from 'react-router-dom';
const ChefRecipe = (props) => {
    
    const data = useLoaderData();
    console.log(data)
    return (
        <div style={{ marginTop: '0px' }}>

            <div className='background'>
            </div>
            <div className='mt-5 mb-3'>
         <Container >
         <Card style={{ width: '50rem', marginRight:'10px' }} className='mx-auto'>
                <Card.Body className='d-flex justify-content-between align-items-center mt-5 mx-3'>
                <Card.Img src={data.img} className='w-25 h-25'></Card.Img>
                    <Card.Subtitle className='mx-3'>   
                    <Card.Title ><span className='fs-2'>{data.name}</span> <br /> </Card.Title> 
                        <p className='text-secondary fs-4'>{data.experince} years of experince</p>
                        <p className='text-secondary'>{data.totalRecipe} recipes</p>
                        <p className='text-secondary mx-auto'><p><AiOutlineLike></AiOutlineLike> {data.likes}</p></p>
                        <p className='text-secondary'><span className='fs-5'>Bio: </span>{data.bio}</p>
                    </Card.Subtitle>
                    
                  
                    
                </Card.Body>
            </Card>
            <h3 className='text-center fw-bold fs-1 mt-5'>Recipe</h3>
         </Container>


        {
            data.items.map(item=>  <SingleRecipe items={item} ></SingleRecipe> )
        }

          

            </div>

        </div>
    );
};

export default ChefRecipe;