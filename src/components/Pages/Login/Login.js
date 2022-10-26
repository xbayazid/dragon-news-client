import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Login.css';

const Login = () => {
  const [error, setError] = useState('') 
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate(from, {replace : true});
        })
        .catch(error => {
          console.error(error);
          setError(error.message);
        })
    }

    return (
            <Form className='w-75 bg-color p-5 rounded-3 mb-4' onSubmit={handleSubmit}>
                <h2 className='title'>Please Login</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Text className="text-danger">
          {error}
        </Form.Text>
        <br />
        <small>New Here? <Link className='ancor' to='/register'>Register</Link></small>
      </Form.Group>
      <Button className='mb-2' variant="primary" type="submit">
        Login
      </Button>
    </Form>
    );
};

export default Login;