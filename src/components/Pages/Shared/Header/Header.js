import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import './Header.css';

const Header = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(error => console.error(error))
  }
    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="dark" variant="dark">
        <Container  className='header-link'>
          <Navbar.Brand><Link to='/'>Dragon News</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
            </Nav>
            <Nav>
              <Nav.Link>
                {
                  user?.uid ? 
                  <>
                  <span>
                  {user?.displayName}</span>
                  <Button onClick={handleLogOut} variant="light">Log Out</Button>
                  </>
                  :
                  <>
                  <Link className='me-2' to='login'>Login</Link>
                  <Link to='register'>Register</Link>
                  </>
                }
                </Nav.Link>
              <Nav.Link eventKey={2}>
                {user?.photoURL ?
                <Image style={{height: '30px'}} roundedCircle src={user.photoURL}>

                </Image>
                : <FaUser></FaUser>
                }
              </Nav.Link>
            </Nav>
            <div className='d-lg-none'>
                <LeftSideNav></LeftSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;