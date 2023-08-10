import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
}

const mockData: Post[] = [
  {
    id: 1,
    title: 'The Benefits of Meditation',
    body: 'Meditation has been practiced for centuries and offers a wide range of benefits. It helps reduce stress, improve concentration, and promote emotional well-being. Just a few minutes of meditation each day can make a significant difference in your overall mental health.',
  },
  {
    id: 2,
    title: 'Tips for Effective Time Management',
    body: 'Time management skills are essential for productivity and success. Prioritize your tasks, create a schedule, and eliminate distractions. By setting goals and using effective techniques, you can make the most of your time and accomplish more each day.',
  },
  {
    id: 3,
    title: 'The Importance of Drinking Water',
    body: 'Staying hydrated is crucial for optimal health. Water helps regulate body temperature, supports digestion, and keeps our skin looking healthy. Make sure to drink enough water throughout the day to keep your body functioning properly.',
  },
  {
    id: 4,
    title: 'The Benefits of Reading',
    body: 'Reading has many advantages. It improves cognitive abilities, enhances vocabulary and language skills, and reduces stress levels. Incorporating even a few minutes of reading into your daily routine can have a positive impact on your overall well-being.',
  },
  {
    id: 5,
    title: 'The Power of Positive Thinking',
    body: 'Positive thinking can greatly influence your mindset and outlook on life. By focusing on the good, you can reduce stress, enhance resilience, and improve overall happiness. Train your mind to see the positive aspects in every situation.',
  },
];

const Posts: React.FC = () => {
  const router = useRouter();
  const accessToken = localStorage.getItem('accessToken');
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [newPost, setNewPost] = useState<Post>({ id: 0, title: '', body: '' });
  const [filter, setFilter] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

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
        .get(`${process.env.API_URL}post/posts`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          console.log('get posts response: ', response);
          const postsData: Post[] = [];
          if (response.data) {
            response.data.map((post: any) => {
              postsData.push({ id: post.uuid, title: post.title, body: post.content });
            });
            setPosts(postsData);
          }
        })
        .catch((error) => {});
      //   setPosts(mockData);
    };

    fetchPosts();
  }, []);

  const handleEdit = (post: Post) => {
    setEditingPost(post);
  };

  const handleUpdate = async () => {
    console.log('editingPost ', editingPost);
    await axios
      .patch(
        `${process.env.API_URL}post/update`,
        { title: editingPost?.title, content: editingPost?.body, uuid: editingPost?.id },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((response) => {
        setPosts((prevPosts) =>
          prevPosts.map((post) => (post.id === editingPost?.id ? { ...post, ...editingPost } : post))
        );
        setEditingPost(null);
      })
      .catch((error) => {});
  };

  const handleCancel = () => {
    setEditingPost(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const maxId = posts.reduce((max, post) => {
      return post.id > max ? post.id : max;
    }, 0);
    setNewPost((prevPost) => ({ ...prevPost, [name]: value, id: maxId + 1 }));
  };

  const handleAddPost = async () => {
    await axios
      .post(
        `${process.env.API_URL}post/create`,
        { title: newPost.title, content: newPost.body },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((response) => {
        setPosts((prevPosts) => [...prevPosts, newPost]);
        setNewPost({ id: 0, title: '', body: '' });
      })
      .catch((error) => {});
  };

  const handleDelete = async (postId: number) => {
    console.log(postId);
    await axios
      .delete(`${process.env.API_URL}post/delete`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: { uuid: postId },
      })
      .then((response) => {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
      })
      .catch((error) => {});
  };

  return (
    <div>
      <h1>Posts</h1>
      <div>
        <label htmlFor="filter">Filter by Title: </label>
        <input type="text" name="filter" value={filter} onChange={(e) => setFilter(e.target.value)} />
      </div>
      <table>
        <thead>
          <tr>
            <th onClick={handleSort} style={{ display: 'flex' }}>
              ID <span>{sortOrder === 'asc' ? '▲' : '▼'}</span>
            </th>
            <th>Title</th>
            <th>Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts
            .filter((post) => post.title.toLowerCase().includes(filter.toLowerCase()))
            .sort((a, b) => a.id.toString().localeCompare(b.id.toString()))
            .map((post, index) => (
              <tr key={post.id}>
                <td
                  onClick={() => {
                    router.push(`/posts/${post.id}`);
                  }}
                >
                  {index}
                </td>
                <td
                  onClick={() => {
                    editingPost?.id !== post.id && router.push(`/posts/${post.id}`);
                  }}
                >
                  {editingPost?.id === post.id ? (
                    <input
                      type="text"
                      name="title"
                      value={editingPost.title}
                      onChange={(e) =>
                        setEditingPost((prevPost: any) => ({
                          ...prevPost,
                          title: e.target.value,
                        }))
                      }
                    />
                  ) : (
                    post.title
                  )}
                </td>
                <td
                  onClick={() => {
                    editingPost?.id !== post.id && router.push(`/posts/${post.id}`);
                  }}
                >
                  {editingPost?.id === post.id ? (
                    <input
                      type="text"
                      name="body"
                      value={editingPost.body}
                      onChange={(e) =>
                        setEditingPost((prevPost: any) => ({
                          ...prevPost,
                          body: e.target.value,
                        }))
                      }
                    />
                  ) : (
                    post.body
                  )}
                </td>
                <td style={{ width: '100px' }}>
                  {editingPost?.id === post.id ? (
                    <>
                      <button onClick={handleUpdate}>Save</button>
                      <button onClick={handleCancel}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(post)}>Edit</button>
                      <button onClick={() => handleDelete(post.id)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <h2>Add New Post</h2>
      <input type="text" name="title" placeholder="Title" value={newPost.title} onChange={handleInputChange} />
      <input type="text" name="body" placeholder="Body" value={newPost.body} onChange={handleInputChange} />
      <button onClick={handleAddPost}>Add Post</button>
    </div>
  );
};

export default Posts;
