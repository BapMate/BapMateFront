import React from 'react';
import Calendar from 'react-calendar';
import { useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import { formatDate } from 'react-calendar/dist/cjs/shared/dateFormatter';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalenderTest = () => {
  const curDate = new Date(); // 현재 날짜
  const [value, onChange] = useState<Value>(curDate);
  const [clickedDate, setClickedDate] = useState(''); //클릭한 데이터 string

  useEffect(() => {
    //클릭 시 날짜 띄우기
    console.log(value); //Fri Nov 03 2023 00:00:00 GMT+0900 (Korean Standard Time)

    //날짜 데이터 정제
    const formattedDate = moment(String(value)).format('YYYY.MM.DD'); //2023.11.10
    console.log(formattedDate);

    setClickedDate(formattedDate);
  }, [value]);

  return (
    <div>
      <h1>This is CalenderTest</h1>
      <Calendar
        locale="en"
        onChange={onChange}
        value={value}
        formatDay={(locale, date) => moment(date).format('DD')}
      />
      <div>{clickedDate}</div>
    </div>
  );
};

export default CalenderTest;
