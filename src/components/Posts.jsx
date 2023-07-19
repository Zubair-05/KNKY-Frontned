import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { logState, activeFilter } from './atoms';
import FeaturedCard from './FeaturedCard';
const Post = () => {
  

  const isLoggedIn = useRecoilValue(logState);
  const filter = useRecoilValue(activeFilter);

  const posts = [
    {
      id: 1,
      title: 'Post 1',
    }
  ];

  const filteredPosts = posts.filter((post) => {
    if (filter === 'featured') {
      // Return all posts (no filter applied)
      return true;
    } else if (filter === 'fresh') {
      // Apply your 'fresh' filter logic here
      // For example, return only posts published within the last 24 hours
      return post.publishedWithinLast24Hours;
    } else if (filter === 'subscribed') {
      // Apply your 'subscribed' filter logic here
      // For example, return only posts from users the current user is subscribed to
      return post.isSubscribedUser;
    } else if (filter === 'interested') {
      // Apply your 'interested' filter logic here
      // For example, return only posts marked as 'interested' by the current user
      return post.isInterestedByCurrentUser;
    } else if (filter === 'following') {
      // Apply your 'following' filter logic here
      // For example, return only posts from users the current user is following
      return post.isFollowingUser;
    }

    return false; // Return false as a fallback (in case the activeFilter value is not recognized)
  });

  return (
    <div>
      
      {
        isLoggedIn ? (
          <div className="posts-container m-5 grid grid-cols-3 grid-flow-row gap-5">
            <FeaturedCard/>
            <FeaturedCard/>
            <FeaturedCard/>
            <FeaturedCard/>
            <FeaturedCard/>
            <FeaturedCard/>
            <FeaturedCard/>
            <FeaturedCard/>
          </div>
        ) : (
          <div>
            <h1>Please login to view posts</h1>
          </div>
        )
      }

    </div>
  );
};

export default Post;
