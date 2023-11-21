import React from 'react';
import Calendar from 'react-calendar';
import { useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalenderTest = () => {
  const curDate = new Date(); // 현재 날짜
  const [value, onChange] = useState<Value>(curDate);

  useEffect(() => {
    console.log(value);
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
      {/* <div>{moment(value).format('YYYY년 MM월 DD일')}</div> */}
    </div>
  );
};

export default CalenderTest;
