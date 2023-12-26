import React, { useState, useCallback, useEffect } from 'react';
import { styled } from 'styled-components';
import CTABtn from '../components/CTABtn';
import TagButton from '../components/common/TagButton';
import TopBar from '../components/TopBar';
import { useNavigate } from 'react-router-dom';
import { usePostHobbies } from '../apis/post/usePostHobbies';

const SignupFavor = () => {
  const [page, setPage] = useState(1);
  const [selectedMood, setSelectedMood] = useState('');
  const [selectedMoods, setSelectedMoods] = useState<string[]>([]); // Assuming that the tags are strings

  const navigate = useNavigate();
  const pathnameParts = location.pathname.split('/');
  const pageParam = parseInt(pathnameParts[pathnameParts.length - 1], 10);

  const { hobbyInfo, isSuccess, error, data } = usePostHobbies();

  useEffect(() => {
    setPage(pageParam);
  }, [pageParam]);

  const FoodData = [
    '#런닝',
    '#클라이밍',
    '#테니스',
    '#등산',
    '#액티비티',
    '#여행',
    '#맛집탐방',
    '#교환학생',
    '#유학생',
    '#아이돌',
    '#애니',
    '#애완동물',
    '#전자기기',
    '#컬렉터',
    '#음악듣기',
    '#전시회',
    '#영화보기',
    '#그림그리기',
    '#뮤지컬',
    '#외국어',
    '#요리',
    '#주식',
    '#취업준비',
  ];
  const LocationData = [
    '인스타감성',
    '이지역터줏대감',
    '신상핫플',
    '나만아는곳',
  ];
  const FavorData = ['민초', '고수', '마라', '하와이안피자', '오이'];
  const HotData = ['1', '2', '3', '4', '5'];

  const handleTagClick = (data: string) => {
    setSelectedMoods((prevSelectedMoods: string[]) => {
      if (prevSelectedMoods.includes(data)) {
        return prevSelectedMoods.filter((item: string) => item !== data);
      } else {
        return [...prevSelectedMoods, data];
      }
    });
    console.log(selectedMoods.length);
  };

  const handleHobbies = () => {
    hobbyInfo({ strings: selectedMoods });
    if (isSuccess) {
      navigate('/signup/favor/2');
      setPage(2);
    }
  };

  return (
    <Wrapper>
      <TopBar />
      {page === 1 && (
        <>
          <Title>관심사나 취미가 있나요?</Title>
          <SubTitle>더 정확한 모임을 추천 받을 수 있어요</SubTitle>
          <TagWrapper>
            {FoodData.map((data, index) => (
              <TagButton
                key={index}
                text={data}
                type={selectedMood === data ? 'default' : 'disabled'}
                onClick={() => handleTagClick(data)}
              />
            ))}
          </TagWrapper>

          {/* <Text>선호하는 식당 타입</Text>
          <TagWrapper>
            {LocationData.map((data, index) => (
              <TagButton
                key={index}
                text={data}
                type={selectedMood === data ? 'default' : 'disabled'}
                onClick={() => setSelectedMood(data)}
              />
            ))}
          </TagWrapper> */}

          <CTABtn
            onClick={(e: any) => {
              handleHobbies();
            }}
            text="다음으로"
          />
        </>
      )}
      {page === 2 && (
        <>
          <Title>
            밥을 먹는 양과 속도는 <br />
            어떻게 되나요?{' '}
          </Title>
          <SubTitle>주변 사람의 평가를 참고하면 도움이 돼요</SubTitle>
          <Text>식사량</Text>
          <TagWrapper>
            {HotData.map((data, index) => (
              <TagButton
                key={index}
                text={data}
                type={selectedMood === data ? 'default' : 'disabled'}
                onClick={() => setSelectedMood(data)}
              />
            ))}
          </TagWrapper>

          <Text>식사 속도</Text>
          <TagWrapper>
            {FavorData.map((data, index) => (
              <TagButton
                key={index}
                text={data}
                type={selectedMood === data ? 'default' : 'disabled'}
                onClick={() => setSelectedMood(data)}
              />
            ))}
          </TagWrapper>

          <CTABtn
            onClick={(e: any) => {
              navigate('/home');
            }}
            text="회원가입 완료"
          />
        </>
      )}
    </Wrapper>
  );
};

export default SignupFavor;

const Wrapper = styled.div`
  width: 390px;
  height: 844px;
  background: var(--white, #fbfbfb);
  margin: auto;
`;

const Title = styled.div`
  color: var(--black, #292525);
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  margin-top: 40px;
  margin-bottom: 20px;
  margin-left: 20px;
`;

const SubTitle = styled.div`
  color: var(--gray, #989292);
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 45px;
  margin-left: 20px;
`;

const TagWrapper = styled.div`
  padding-left: 20px;
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 4;
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

const SmallText = styled.div`
  font-family: Pretendard;
  color: gray;
  font-size: 9px;
  font-style: small;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 20px;
`;
