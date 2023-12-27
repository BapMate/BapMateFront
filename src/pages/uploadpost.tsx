import React, { useState, useRef, useEffect } from 'react';
import { styled } from 'styled-components';
import plus from '../assets/plus.svg';
import close from '../assets/close.svg';
import axios from 'axios';
import { usePostMeetUp } from '../apis/post/usePostMeetUp';
import { usePostImage } from '../apis/post/usePostImage';
import TagButton from '../components/common/TagButton';
import TopBar from '../components/TopBar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const UploadPostPage = () => {
  const [startDate, setStartDate] = useState<any>(new Date());
  const MoodData: string[] = ['#조용한식사', '#극E', '#맛집탐방', '#자기계발'];
  const [selectedMood, setSelectedMood] = useState<string>('');
  const [selectedRegionMood, setSelectedRegionMood] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<any>('');
  const [imgSrc, setImgSrc] = useState<any>('');

  const [meetUpName, setMeetUpName] = useState<string>('');
  const [introduce, setIntroduce] = useState<string>('');
  const [chatRoomLink, setChatRoomLink] = useState<string>('');
  const [region, setRegion] = useState<string>('');
  const [restaurant, setRestaurant] = useState<string>('');
  const [representationImage, setRepresentationImage] = useState<string>('');
  const [numberOfPeople, setNumberOfPeople] = useState<number>(0);

  const { postMeetUp, isSuccess, isError, error, data } = usePostMeetUp();

  const { postImage, isSuccessImage, isErrorImage, errorImage, dataImage } =
    usePostImage();

  const submit = async () => {
    // Prepare the data to be sent to the server
    const postData: any = {
      name: meetUpName,
      introduce: introduce,
      chatRoomLink: chatRoomLink,
      region: region,
      date: startDate, // Convert to a valid date format
      numberOfPeople: numberOfPeople, // Change to the actual number of people
      meetUpAtmosphere: selectedMood,
      regionAtmosphere: selectedRegionMood,
      restaurant: restaurant,
      representationImage: representationImage,
    };
    postMeetUp(postData);
    console.log(selectedMood);
  };

  const loadImg = async (e: any) => {
    postImage(e.target.files[0]);
    console.log(dataImage);
    setRepresentationImage(dataImage);
    setImage(e.target.files[0]);
    const selectedImage = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setImgSrc(e.target?.result);
    };
    reader.readAsDataURL(selectedImage);
    setImgSrc(selectedImage);
    console.log(selectedImage);
  };

  const removeImage = () => {
    setImage('');
    setImgSrc('');
  };

  const FoodData = [
    '#한식',
    '#일식',
    '#양식',
    '#중식',
    '#세계음식',
    '#뷔페',
    '#카페',
    '#주점',
  ];
  const LocationData = [
    '#인스타감성',
    '#이지역터줏대감',
    '#신상핫플',
    '#나만아는곳',
  ];

  const handleMoodClick = (data: React.SetStateAction<string>) => {
    setSelectedMood(data);
    console.log(data);
  };

  useEffect(() => {
    // postImage가 완료된 후에 실행됨
    console.log(dataImage);
    setRepresentationImage(dataImage);
  }, [dataImage]); // dataImage가 변경될 때마다 useEffect가 실행됨

  return (
    <Wrapper>
      <TopBar submit={submit} />
      {/* <button onClick={submit}/> */}
      <ScrollBox>
        <Container>
          <Title>모임 이름</Title>
          <InputBox
            onChange={(date) => setMeetUpName(date.target.value)}
            value={meetUpName}
            placeholder="모임을 잘 나타내는 이름을 지어주세요 (최대 20자)"
          />
        </Container>

        <Container>
          <Title>한줄 소개</Title>
          <InputBoxLarge
            onChange={(date) => setIntroduce(date.target.value)}
            value={introduce}
            placeholder="모임을 간단히 설명해 주세요 (최대 70자)"
          />
        </Container>

        <Container>
          <Title>인원</Title>
          <InputBox
            type="number"
            onChange={(date) => setNumberOfPeople(parseInt(date.target.value))}
            value={numberOfPeople}
            placeholder="모임을 간단히 설명해 주세요 (최대 70자)"
          />
        </Container>

        <Container>
          <Title>오픈 채팅방 링크</Title>
          <InputBox
            onChange={(date) => setChatRoomLink(date.target.value)}
            value={chatRoomLink}
            placeholder="참여자들과 소통할 오픈채팅방 링크를 입력해주세요"
          />
        </Container>

        <Container>
          <Title>날짜</Title>
          <SDatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy-MM-dd"
          />
        </Container>

        <Container>
          <Title>지역</Title>
          <InputBox
            onChange={(date) => setRegion(date.target.value)}
            value={region}
            placeholder="장소를 입력하세요(최대 20자)"
          />
        </Container>

        <Container>
          <Title>장소</Title>
          <InputBox
            onChange={(date) => setRestaurant(date.target.value)}
            value={restaurant}
            placeholder="장소를 입력하세요(최대 20자)"
          />
        </Container>

        <Container>
          <Title>모임 분위기</Title>
          <TagWrapper>
            {MoodData.map((data, index) => (
              <TagButton
                key={index}
                text={data}
                type={selectedMood === data ? 'default' : 'disabled'}
                onClick={(data) => handleMoodClick(data)}
              />
            ))}
          </TagWrapper>
        </Container>

        {/* <Container>
          <Title>음식 종류</Title>
          <TagWrapper>
            {FoodData.map((data, index) => (
              <TagButton
                key={index}
                text={data}
                type={selectedMood === data ? "default" : "disabled"}
                onClick={() => setSelectedMood(data)}
              />
            ))}
          </TagWrapper>
        </Container> */}

        <Container>
          <Title>장소 타입</Title>
          <TagWrapper>
            {LocationData.map((data, index) => (
              <TagButton
                key={index}
                text={data}
                type={selectedRegionMood === data ? 'default' : 'disabled'}
                onClick={(data) => setSelectedRegionMood(data)}
              />
            ))}
          </TagWrapper>
        </Container>

        <Container>
          <Title>대표 사진(선택)</Title>
          <ImgContainer>
            <UploadImg>
              <img
                id="uploadImgBtn"
                src={plus}
                alt="Add Art"
                onClick={() => inputRef.current?.click()}
              />
              <input
                type="file"
                ref={inputRef}
                style={{ display: 'none' }}
                accept="image/*"
                onChange={(e) => loadImg(e)}
              />
              {image && <img id="uploadedImg" src={imgSrc} />}
              {image && <img id="delImg" onClick={removeImage} src={close} />}
            </UploadImg>
          </ImgContainer>
        </Container>
      </ScrollBox>
    </Wrapper>
  );
};

export default UploadPostPage;

const PhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  width: 295px;
  height: 170px;
  border-radius: 20px;
  font-size: 40px;
  border: 1px dashed #ffa5aa;
  color: #ffa5aa;
  margin-bottom: 20px;
`;

const ImgContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 170px;
`;
const UploadImg = styled.div`
  display: flex;
  width: 320px;
  height: 170px;
  margin-left: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px dashed #ffa5aa;
  #uploadedImg {
    position: absolute;
    width: 101%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    z-index: 5;
  }
  #delImg {
    position: absolute;
    top: 10px;
    right: 0px;
    z-index: 10;
  }
`;

const Container = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 20px;
`;

const ScrollBox = styled.div`
  height: 740px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TagWrapper = styled.div`
  padding-left: 20px;
  width: 320px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const InputBox = styled.input`
  border-radius: 40px;
  border: 1px solid var(--light-gray, #eceaea);
  width: 100%;
  height: 30px;
  padding: 17px 24px;

  color: var(--gray, #989292);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`;

const InputBoxLarge = styled.textarea`
  border-radius: 40px;
  border: 1px solid var(--light-gray, #eceaea);
  width: 100%;
  height: 100px;
  padding: 17px 24px;
  resize: none;
  color: var(--gray, #989292);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`;

const SelectBox = styled.select`
  appearance: none; /* 브라우저 스타일 무시 */
  border-radius: 40px;
  border: 1px solid var(--light-gray, #eceaea);
  width: 345px;
  height: 60px;
  padding: 17px 24px;
  padding-right: 30px;

  color: var(--gray, #989292);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`;

const Wrapper = styled.div`
  width: 390px;
  height: 844px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

const Title = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  margin-left: 20px;
`;

const SDatePicker = styled(DatePicker)`
  border-radius: 40px;
  border: 1px solid var(--light-gray, #eceaea);
  width: 100%;
  height: 30px;
  padding: 17px 24px;

  color: var(--gray, #989292);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`;
