import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../App.css';

const Footer = () => {

    return(
       <footer className='mt-0 feet above'>
           <Container fluid={true}>
               <Row className='border-top justify-content-between p-3'>
                    <Col className='p-0' md={3} sm={12}>
                        Noah Smith
                    </Col>
                    <Col className=''>
                        This Site was made by Noah Smith
                    </Col>
                </Row>
           </Container>
       </footer>
           
     
    );
}


export default Footer;