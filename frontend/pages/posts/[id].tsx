import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
}

const Post: React.FC = () => {
  const accessToken = localStorage.getItem('accessToken');
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<Post>();

  const isAccessTokenExpired = (accessToken: any) => {
    // Implement your access token expiry check logic here
    // For example, you can decode the JWT token and check the expiration time
    // Return true if the JWT token is expired, false otherwise
    return false; // Replace this with your logic
  };

  useEffect(() => {
    if (!accessToken || isAccessTokenExpired(accessToken)) {
      router.push('/auth/login'); // Redirect to login page if token is invalid or not present
    }
    // Fetch posts from API or any data source
    const fetchPosts = async () => {
      await axios
        .get(`${process.env.API_URL}post/${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          console.log('get post response: ', response);
          if (response.data) {
            console.log(response.data);
            setPost({ id: response.data.id, title: response.data.title, body: response.data.content });
          }
        })
        .catch((error) => {});
    };

    fetchPosts();
  }, [id]);

  return (
    <>
      <h1>Post: {post?.title}</h1>
      <h3>{post?.body}</h3>
    </>
  );
};

export default Post;
