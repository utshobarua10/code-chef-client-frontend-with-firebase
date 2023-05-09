import React, { useContext, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import {BsGithub}   from 'react-icons/bs';
import {MdAccountCircle}   from 'react-icons/md';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/Context';
const Signup = () => {
    const {createUser,signInWithGoogle,userUpdateProfile,createUserWithGitHub} = useContext(AuthContext && AuthContext);
    const [error,setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleSubmit =(e)=>{
       
            setError('')
            setSuccess('');
        
            e.preventDefault();
            const name = e.target.name.value;
            const email = e.target.email.value;
            const url = e.target.url.value;
            const password = e.target.password.value;
            const confrimPassword = e.target.confirmPassword.value;

            if(password != confrimPassword){
                setError("Password Didn't match");
              
                return
            }

            if(password.length<6){
                setError("Password Must Have At Least 6 Charachter");
                return
            }


            createUser(email,password)

            .then(result=>{
                userUpdateProfile(result.user,name,url)
                return setSuccess('User Created Sucessfully')
            })
            .catch(err => {
            setError(err.message)
            return;
        });
            
       
            
    }

    const handleGoogleSignIn =()=>{
        console.log('sign in clicked')
        signInWithGoogle()
      
        
        
    }

    const handleGitHub =()=>{
        createUserWithGitHub()
        .then(res => console.log(res))
        .then(err => console.log(err))
        
    }



    return (
        <div>
            <Container style={{marginTop:'100px'}}>
                <div className="text-center mb-5">
                    <h3 style={{ fontWeight: 'bold' }} className='mt-5' >Log In <br /> to Your Account</h3>
                </div>
                <Form className='w-50 mx-auto' onSubmit={handleSubmit} >

                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control type="text" name='name' placeholder="Enter name" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control type="email" name='email' placeholder="Enter email" />

                    </Form.Group>
                    <Form.Group className="mb-3 h-100" controlId="formBasicEmail">

                        <Form.Control type="text" name='url' placeholder="Enter Your Image Url" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confrimn Password</Form.Label>
                        <Form.Control type="password" name='confirmPassword'  placeholder="Confirm Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Accept Terms & Conditions" />
                    </Form.Group>
                    <button className='main-button w-100' type='submit'> Create Account </button>
                    <p className='text-danger mt-3'>{error}</p>
                    <p className='text-success mt-3'>{success}</p>
                </Form>

                <div className="d-flex justify-content-between w-50 mb-5 mt-3" style={{marginLeft: '276px'}}>
                <button className='border p-2 rounded' onClick={handleGoogleSignIn}> <FcGoogle/> Sign In With Google </button>
                <Link to='/signin'>  <button className='border p-2 rounded'> <MdAccountCircle/> Have An Account? </button> </Link>
               <button className='border p-2 rounded' onClick={handleGitHub}> <BsGithub/> Sign In With Github </button>
                


                </div>






            </Container>
        </div>
    );
};

export default Signup;