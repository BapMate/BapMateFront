// PostDetailPage.tsx
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

import TopBar from '../components/TopBar';
import divBar from '../assets/icons/divBar.svg';
import mapPin from '../assets/mapPin.svg';
import Tag from '../components/Tag';
import CTABtn from '../components/CTABtn';
import CTAdelBtn from '../components/CTAdelBtn';
import { useGetMeetUpDetail } from '../apis/get/useGetMeetUpDetail';
import { formatDateString } from '../components/FormatDateString';
import { usePostParticipate } from '../apis/post/usePostParticipate';
import axios from 'axios';

const MeetUpDetail = () => {
  const navigate = useNavigate();
  const { meetUpId } = useParams();
  const [showCTAdelBtn, setShowCTAdelBtn] = useState(false);

  // Use the resolvedMeetUpId in the useGetMeetUpDetail hook
  const { meetUpDetail, isLoading, error } = useGetMeetUpDetail(meetUpId || '');

  console.log(meetUpDetail?.data);
  const formattedDate = formatDateString(meetUpDetail?.data?.date || '');
  console.log(meetUpDetail?.data?.date);
  console.log(formattedDate);

  const { participate, participateError, isParticipateSuccess } =
    usePostParticipate();

  const goBack = () => {
    navigate(-1);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  const token = localStorage.getItem('accessToken');

  const handleCTABtnClick = async () => {
    try {
      // usePostParticipate 훅을 통해 모임에 참여하는 로직
      // 데이터를 가져오거나 에러 처리 등을 수행할 수 있음
      const response = await axios.post(
        `/v1/meetUp/participate/${meetUpId}`,
        null,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*',
          },
          params: {
            meetUpId: meetUpId,
          },
        },
      );

      // Axios automatically throws an error for non-2xx responses,
      // so you can handle success here directly
      setShowCTAdelBtn(true);
    } catch (error) {
      // 에러 처리
      console.error('An error occurred:', error);
    }
  };

  return (
    <Wrapper className="PostDetailPage">
      <TopBar />
      <Image src={meetUpDetail?.data?.representationImage} alt="MeetUp Image" />
      <Info>
        <TextBox>
          <Detail>
            <span id="time">{formattedDate}</span>
            <Place>
              <img src={mapPin} alt="Map Pin" />
              <span id="place">{meetUpDetail?.data?.region}</span>
            </Place>
          </Detail>
          <Title id="title">{meetUpDetail?.data?.name}</Title>
        </TextBox>
        <TagBox>
          <Tag text={meetUpDetail?.data?.meetUpAtmosphere} type={'enabled'} />
          <Tag text={meetUpDetail?.data?.regionAtmosphere} type={'enabled'} />
          {/* Add more tags based on your data structure */}
        </TagBox>
      </Info>
      <Content>{meetUpDetail?.data?.introduce}</Content>
      <Members>
        <Text>오픈 채팅방 링크</Text>
        {meetUpDetail?.data?.chatRoomLink}
      </Members>
      {showCTAdelBtn ? (
        <CTAdelBtn onClick={goBack} />
      ) : (
        <CTABtn text="참여하기" onClick={handleCTABtnClick} />
      )}
    </Wrapper>
  );
};
export default MeetUpDetail;

const Wrapper = styled.div`
  width: 390px;
  height: 844px;
  background: var(--white, #fbfbfb);
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 390px;
  height: 190px;
  margin-bottom: 10px;
  flex-shrink: 0;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  width: 350px;
  padding: 12px 20px 20px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  border-radius: 0px 0px 20px 20px;
  background: var(--white, #fbfbfb);
`;

const PeopleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--black, #292525);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 152.872%;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

const Writer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  img {
    width: 24px;
    height: 24px;
    border-radius: 24px;
    object-fit: cover;
  }
`;

const Text = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  #time {
    color: var(--black, #292525);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 152.872%;
  }
`;

const Place = styled.div`
  gap: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--gray, #989292);
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 152.872%;
`;

const Title = styled.div`
  color: var(--black, #292525);
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 152.872%;
`;

const TagBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
`;

const Content = styled.div`
  width: 350px;
  color: var(--black, #292525);
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 152.872%;
`;

const Members = styled.div`
  margin-top: 20px;
  width: 310px;
  display: inline-flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 20px;
  border: 1px solid var(--light-gray, #eceaea);
  gap: 12px;
  span {
    color: var(--black, #292525);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 152.872%;
  }
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
