import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Pages/Shared/Footer/Footer';
import Header from '../components/Pages/Shared/Header/Header';
import LeftSideNav from '../components/Pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../components/Pages/Shared/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
            <Row>
                <Col lg="2" className='d-none d-lg-block'>
                <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg="7">
                <Outlet></Outlet>
                </Col>
                <Col lg="3">
                    <RightSideNav></RightSideNav>
                </Col>
            </Row>
        </Container>
        <Footer></Footer>
        </div>
    );
};

export default Main;