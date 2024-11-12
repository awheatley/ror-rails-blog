import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { API_URL } from '../../constants';

function PostDetails() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCurrentPost = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}`);

        if (response.ok) {
          const json = await response.json();
          setPost(json);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchCurrentPost();
  }, [id]);

  return (
    post && <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to='/'>Back to posts</Link>
    </div>
  )
}

export default PostDetails;