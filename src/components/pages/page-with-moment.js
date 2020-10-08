import React from 'react';
import moment from 'moment';

export default function PageWithMoment() {
  return (
    <>
      <h1>
        I am page with the moment.js{' '}
        <span role="img" aria-label="clock emoji">
          ⏱️
        </span>
      </h1>
      <p>I need all of your memory</p>
      <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
    </>
  );
}
