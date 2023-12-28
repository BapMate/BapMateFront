import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import divBar from '../assets/divBar.svg';
import mapPin from '../assets/mapPin.svg';
import Tag from './Tag';
import { formatDateString } from './FormatDateString';

const Post = (props: any) => {
  const navigate = useNavigate();

  const moveDetail = () => {
    const meetUpId = props.id.toString();
    console.log('hi', meetUpId);
    navigate(`/meetup/${meetUpId}`);
  };

  const formattedDate = formatDateString(props?.date || '');

  return (
    <Wrapper onClick={moveDetail}>
      <Image id="postImg" src={props.representationImage}></Image>
      <Info>
        <TextBox>
          <People>
            <Writer id="writer">
              <span>{props.name}</span>
            </Writer>
            <img src={divBar} />
            <span id="people">
              {props.currentNumberOfPeople}/{props.numberOfPeople}
            </span>
          </People>
          <Detail>
            <span id="time">{formattedDate}</span>
            <Place>
              <img src={mapPin} />
              <span id="place">{props.region}</span>
            </Place>
          </Detail>
          <Title id="title">{props.introduce}</Title>
        </TextBox>
        <TagBox>
          {props.regionAtmosphere && (
            <Tag text={props.regionAtmosphere} type={'enabled'}></Tag>
          )}
          {props.meetUpAtmosphere && (
            <Tag text={props.meetUpAtmosphere} type={'enabled'}></Tag>
          )}
        </TagBox>
      </Info>
    </Wrapper>
  );
};

export default Post;

const Wrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 350px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 20px;
  box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.08);
`;

const Image = styled.img`
  width: 350px;
  height: 134px;
  border-radius: 20px 20px 0px 0px;
  background: lightgray 50%;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  padding: 12px 16px 16px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  border-radius: 0px 0px 20px 20px;
  background: var(--white, #fbfbfb);
`;

const People = styled.div`
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
