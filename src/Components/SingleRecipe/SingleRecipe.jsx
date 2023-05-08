import React from 'react';
import { Card, Container } from 'react-bootstrap';

import { BsFillStarFill } from 'react-icons/bs';
import { MdOutlineFavoriteBorder } from "react-icons/md";
const SingleRecipe = (props) => {
    console.log(props.items.name)
    const curry = props.items.name;
    const food = props.items.img;
    const bio = props.items.details;
    const rating = props.items.rating;
    return (
        <div>
            <Container>
               
                <Card style={{ width: '40rem'}} className='mx-auto p-3'>
                    <Card.Body className='d-flex justify-content-between align-items-center p-5'>
                        <Card.Img src={food} className='w-25'></Card.Img>
                        <Card.Subtitle className='mx-5 w-50'>
                            <Card.Title ><span className='fs-2'>{curry}</span> <br /> </Card.Title>
                            <p className='text-secondary'>{bio}</p>
                           <div className='d-flex justify-content-evenly'>
                           <button className='border p-2 rounded'> Cooking Method </button>
                            <button className='border p-2 rounded'> Ingredient </button>
                            <button className='border p-2 rounded'> {rating} <MdOutlineFavoriteBorder ></MdOutlineFavoriteBorder> </button>
                           </div>
                        </Card.Subtitle>

                        

                    </Card.Body>
                </Card>

            </Container>
        </div>
    );
};

export default SingleRecipe;