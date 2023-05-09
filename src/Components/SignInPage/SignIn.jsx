import React, { useContext } from 'react';
import NavbarLinks from '../Navbar/NavbarLinks';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './SignIn.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Context';

const SignIn = () => {
    const {signInUser,user} = useContext(AuthContext && AuthContext);
    const location = useLocation();
    const navigation = useNavigate();
   
    const from = location?.state?.from.pathname || '/'
    console.log(from);
    

    const handleSubmit =(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email,password)
        navigation(from,{replace:true})
        console.log(user.photoURL)
    }

    return (
        <div className='mt-5'>
            <Container style={{marginTop:'150px', marginBottom:'150px'}}>
                <div className="text-center mb-5">
                    <h3 style={{fontWeight: 'bold'}} >Sign In <br /> to Your Account</h3>
                </div>
                <div className="d-flex">
                    <Form className='w-50 mx-auto' onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">

                            <Form.Control type="email" name='email' placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Accept Terms & Conditions" />
                        </Form.Group>
                        <button className='main-button w-100' type='submit'> Sign In</button>
                    </Form>


                    <div className='text-center'>

                        <h3>Don't have an Account</h3>
                        <p >Add items to your wishlistget <br /> personalised recommendations
                           <br /> check out more quickly track your orders register</p>
                           <Link to='/signup'><button className='main-button w-100'> Create Account</button></Link>

                    </div>




                </div>
            </Container>
        </div>
    );
};

export default SignIn; 