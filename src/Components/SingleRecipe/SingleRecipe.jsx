import React, { useState } from 'react';
import { Button, Card, Container, Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { BsFillStarFill } from 'react-icons/bs';
import { MdOutlineFavoriteBorder } from "react-icons/md";
import 'react-toastify/dist/ReactToastify.css';
import Rating from 'react-rating';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const SingleRecipe = (props) => {
    console.log(props.items.name)
    const curry = props.items.name;
    const food = props.items.img;
    const bio = props.items.details;
    const rating = props.items.rating;
    const [clicked, setClicked] = useState(false);
    const [show, setShow] = useState(false);
    const notify = () => {
        console.log('button clicked')
        toast("Added to favourites");
        setClicked(true)

    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <div>
            <Container>




                <Card style={{ width: '40rem' }} className='mx-auto p-3'>
                    <Card.Body className='d-flex justify-content-between align-items-center p-5'>


                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Cooking Method</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>There are five main dry heat cooking methods that are important to know: baking, roasting, broiling, sautéing, and grilling. But frying such as deep-frying and pan-frying are also dry cooking techniques, relying on fat and high temps to cook the food.</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>

                            </Modal.Footer>
                        </Modal>




                        <Card.Img src={food} className='w-25'></Card.Img>
                        <Card.Subtitle className='mx-5 w-75'>
                            <Card.Title ><span className='fs-2'>{curry}</span> <br /> </Card.Title>
                            <p className='text-secondary'>{bio}</p>
                            <div className='d-flex justify-content-evenly'>
                                <button className='border p-2  rounded' onClick={handleShow}> Cooking Method </button>
                                <button className='border p-2 rounded' onClick={handleShow}> Ingredient </button>
                                <button className='border p-2 rounded' disabled={clicked ? 'disabled' : ''} onClick={notify}>
                                    <Rating
                                        placeholderRating={rating}
                                        readonly
                                        emptySymbol={<AiOutlineStar></AiOutlineStar>}
                                        placeholderSymbol={<AiFillStar></AiFillStar>}
                                        fullSymbol={<AiFillStar></AiFillStar>}
                                    />
                                    
                                    <ToastContainer /> </button>
                            </div>
                        </Card.Subtitle>



                    </Card.Body>
                </Card>

            </Container>
        </div>
    );
};

export default SingleRecipe;