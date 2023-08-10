import { NextPage } from 'next';
import Head from 'next/head';
import { Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';

/**
 * Main page of the Application
 * @page Home
 */
const Home: NextPage = () => {
  const router = useRouter();
  const isAccessTokenExpired = (accessToken: any) => {
    // Implement your access token expiry check logic here
    // For example, you can decode the JWT token and check the expiration time
    // Return true if the JWT token is expired, false otherwise
    return false; // Replace this with your logic
  };
  // Replace this condition with your own access token validation logic
  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken || isAccessTokenExpired(accessToken)) {
    router.push('/auth/login'); // Redirect to login page if token is invalid or not present
  }
  return (
    <>
      <Head>
        <title>TEST PROJECT</title>
        <meta name="description" content="_DESCRIPTION_" />
      </Head>

      <Stack spacing={2} padding={2}>
        <Stack>
          <Typography variant="h3">Welcome!</Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
