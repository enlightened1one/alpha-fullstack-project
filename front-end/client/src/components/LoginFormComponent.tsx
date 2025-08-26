import React from 'react';
import { Input } from './ui/input';
// import { Form } from 'react-router-dom';


const LoginFormComponent: React.FC = () => {
    return (
        <>
         <form action="">
           <Input type="text" placeholder="Username" />
           <Input type="email" placeholder="Email" />
           <Input type="password" placeholder="Password" />
           <button type="submit">Login</button>
         </form>


        </>
    );
};

export default LoginFormComponent;