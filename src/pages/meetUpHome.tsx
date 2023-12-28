import React, { useState, useCallback, useEffect } from 'react';
import { styled } from 'styled-components';

import MenuBar from '../components/MenuBar';
import Post from '../components/Post';
import MainTopBar from '../components/MainTopBar';
import { useGetHostingMeetup } from '../apis/get/useGetHostingMeetup';
import { useGetRecommendedMeetUps } from '../apis/get/useGetRecommendedMeetUps';

const MeetUpHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { recommendedMeetUps, isLoading, error } = useGetRecommendedMeetUps();

  const posts = recommendedMeetUps?.meetUpList;
  console.log(recommendedMeetUps);

  return (
    <Wrapper className="PostPage">
      <MainTopBar openModal={openModal} />
      <PostList>
        {posts &&
          posts.map((post: any) => {
            return (
              <div key={post.id}>
                <Post {...post}></Post>
              </div>
            );
          })}
      </PostList>
      <MenuBar />
    </Wrapper>
  );
};

export default MeetUpHome;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--white, #fbfbfb);
  margin: auto;
`;

const PostList = styled.div`
  height: 680px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
