import React from 'react';
import { Card, Container } from 'react-bootstrap';
import food from '../../Images/food.jpg'
import { BsFillStarFill } from 'react-icons/bs';
import { MdOutlineFavoriteBorder } from "react-icons/md";
const SingleRecipe = () => {
    return (
        <div>
            <Container>
                <h3 className='text-center fw-bold fs-1 mt-5'>Recipe</h3>
                <Card style={{ width: '40rem', margin: '10px' }} className='mx-auto p-3'>
                    <Card.Body className='d-flex justify-content-between align-items-center p-5'>
                        <Card.Img src={food} className='w-25'></Card.Img>
                        <Card.Subtitle className='mx-3'>
                            <Card.Title ><span className='fs-2'>Curry</span> <br /> </Card.Title>
                            <p className='text-secondary'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia dolores similique nostrum labore possimus esse perspiciatis cum ducimus neque dicta quos officia molestiae rem earum veritatis minus, ipsa sequi explicabo?</p>
                           <div className='d-flex justify-content-evenly'>
                           <button className='border p-2 rounded'> Cooking Method </button>
                            <button className='border p-2 rounded'> Ingredient </button>
                            <button className='border p-2 rounded'> <MdOutlineFavoriteBorder ></MdOutlineFavoriteBorder> </button>
                           </div>
                        </Card.Subtitle>

                        <BsFillStarFill />

                    </Card.Body>
                </Card>

            </Container>
        </div>
    );
};

export default SingleRecipe;