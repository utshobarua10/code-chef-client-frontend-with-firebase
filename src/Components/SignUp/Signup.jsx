import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import {BsGithub}   from 'react-icons/bs';
import {MdAccountCircle}   from 'react-icons/md';
import { Link } from 'react-router-dom';
const Signup = () => {
    return (
        <div>
            <Container>
                <div className="text-center mb-5">
                    <h3 style={{ fontWeight: 'bold' }} className='mt-5' >Log In <br /> to Your Account</h3>
                </div>
                <Form className='w-50 mx-auto'>

                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control type="Name" placeholder="Enter name" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control type="email" placeholder="Enter email" />

                    </Form.Group>
                    <Form.Group className="mb-3 h-100" controlId="formBasicEmail">

                        <Form.Control type="file" placeholder="Enter Your Image Url" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confrimn Password</Form.Label>
                        <Form.Control type="password" name='confirm-password' placeholder="Confirm Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Accept Terms & Conditions" />
                    </Form.Group>
                    <button className='main-button w-100'> Create Account </button>
                </Form>

                <div className="d-flex justify-content-between w-50 mb-5 mt-3" style={{marginLeft: '276px'}}>
                <button className='border p-2 rounded'> <FcGoogle/> Sign In With Google </button>
                <Link to='/signin'>  <button className='border p-2 rounded'> <MdAccountCircle/> Have An Account? </button> </Link>
               <button className='border p-2 rounded'> <BsGithub/> Sign In With Github </button>
                


                </div>






            </Container>
        </div>
    );
};

export default Signup;