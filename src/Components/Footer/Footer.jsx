import React from 'react';
import './Footer.css'
import { Col, Row } from 'react-bootstrap';
import logo from '../../Images/logo.png'
import { GoLocation } from 'react-icons/go';
import{AiOutlinePhone,AiOutlineMail} from 'react-icons/ai'
const Footer = () => {
    return (
        <div className='footer-body p-5'>
            <Row className='text-white'>
                <Col>
                <p className='fs-3'><span><img src={logo} alt="" /></span>Hugner Time</p>
               <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sapiente ex molestias! Voluptatem dolorem </li>
                <li> <GoLocation></GoLocation> Brooklyn, New York, United States</li>
                <li> <AiOutlinePhone></AiOutlinePhone> +0123-456789</li>
                <li> <AiOutlineMail></AiOutlineMail> example@example.com</li>
                </Col>
                <Col>
                <li className='fs-3'>Company</li>
                <li>About</li>
                <li>All Products</li>
                <li>FAQ</li>
                <li>Contact Us</li>
                
                </Col>
                <Col>
                    <li className='fs-3'>Services</li>
                    <li>Order Tracking</li>
                    <li>Wish List</li>
                    <li>Terms & Condition</li>
                    <li>Promotional Offers</li>
                </Col>
 
               
            </Row>
        </div>
    );
};

export default Footer;