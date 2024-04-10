import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostWall from "../components/PostWall";
import { getPosts } from "../store/actions/post.action";

const Home = () => {
  const dispatch = useDispatch();
  const postsData = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <h2>WELCOME!</h2>
      <PostWall posts={postsData.posts} fetchType="ALL_POSTS" />
    </div>
  );
};

export default Home;
