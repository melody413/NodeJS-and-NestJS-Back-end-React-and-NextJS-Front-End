import React from 'react';
import { useRouter } from 'next/router';
import RegisterForm from 'src/components/Login/RegistForm';
import axios from 'axios';

const RegisterPage = () => {
  const router = useRouter();
  const handleRegister = async (formData: any) => {
    // You can handle the registration logic here
    console.log(formData);
    // Example API call to register the user
    axios
      .post(`${process.env.API_URL}auth/register`, {
        ...formData,
      })
      .then((response) => {
        alert('Created your account successfully.');
        console.log('register response: ', response);
        router.push('/auth/login');
        // Handle successful registration
      })
      .catch((error) => {
        alert(error.message);
        // Handle registration error
      });
  };

  return (
    <div>
      <h1>Register</h1>
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
};

export default RegisterPage;
