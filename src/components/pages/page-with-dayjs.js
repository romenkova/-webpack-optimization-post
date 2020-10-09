import React from 'react';
import dayjs from 'dayjs';

export default function PageWithDayJS() {
  return (
    <>
      <h1>
        I am page with the day.js{' '}
        <span role="img" aria-label="clock emoji">
          ⏱️
        </span>
      </h1>
      <div>{dayjs(new Date()).format('MMMM DD YYYY, h:mm:ss a')}</div>
    </>
  );
}
