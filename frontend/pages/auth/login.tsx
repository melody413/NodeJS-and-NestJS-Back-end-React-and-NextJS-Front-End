import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LoginForm from 'src/components/Login/LoginForm';
import axios from 'axios';

const LoginPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const handleLogin = (formData: any) => {
    // You can handle the login logic here
    console.log(formData);
    axios
      .post(`${process.env.API_URL}auth/login`, {
        ...formData,
      })
      .then((response) => {
        console.log('login response: ', response);
        localStorage.setItem('accessToken', response.data.accessToken); // Store the token in local storage
        setIsAuthenticated(true); // For testing purposes, remove this line when using actual login logic
        router.push('/');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
