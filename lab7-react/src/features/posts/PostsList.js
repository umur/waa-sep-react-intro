import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { useEffect } from "react";
import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
    const dispatch =useDispatch();

  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === 'idle') {
        dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch])

  
    let content;
    if (postsStatus === 'loading') {
        content = <div className="loader">Loading...</div>
    } else if (postsStatus === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
        content = orderedPosts.map((post) => (
            <PostsExcerpt key={post.id} post={post} />
        ));
    } else if (postsStatus === 'failed') {
        content = <div>{error}</div>
    }


  
  

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostsList;
