import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';

import Post from '../components/Post';
import MenuBar from '../components/MenuBar';
import TapBar from '../components/TapBar';
import { useGetHostingMeetup } from '../apis/get/useGetHostingMeetup';
import { useGetParticipateMeetUp } from '../apis/get/useGetParticipateMeetUp';

const MeetingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = React.useState<'join' | 'made'>('join');

  const handleTabClick = (tabId: 'join' | 'made') => {
    setActiveTab(tabId);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { hostingMeetup, isLoading, error } = useGetHostingMeetup();
  console.log(hostingMeetup);

  const { participatedMeetup, isLoadingParticipate, errorParticipate } =
    useGetParticipateMeetUp();

  const posts = hostingMeetup?.data;

  const participations = participatedMeetup?.data;

  useEffect(() => {
    const timer = setTimeout(() => {
      openModal();
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Wrapper className="MeetingPage">
      <TapBar activeTab={activeTab} handleTabClick={handleTabClick} />
      <List>
        {activeTab === 'join' ? (
          participations && participations.length > 0 ? (
            participations.map((participate: any) => (
              <div key={participate.id}>
                <Post {...participate}></Post>
              </div>
            ))
          ) : (
            <Text>참여한 모임이 없습니다</Text>
          )
        ) : // 'made' 탭이 선택된 경우
        posts && posts.length > 0 ? (
          posts.map((post: any) => (
            <div key={post.id}>
              <Post {...post}></Post>
            </div>
          ))
        ) : (
          <Text>참여한 모임이 없습니다</Text>
        )}
      </List>

      <MenuBar />
    </Wrapper>
  );
};

export default MeetingPage;

const Wrapper = styled.div`
  width: 390px;
  height: 844px;
  background: var(--white, #fbfbfb);
  margin: auto;
`;

const List = styled.div`
  height: 710px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  color: var(--black, #292525);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 152.872%;
`;
