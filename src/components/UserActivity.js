import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function UserActivity({ start, end }) {
  const diff = calculateHours(end, start);
  return (
    <div className='eachActivity'>
      <CircularProgressbar
        value={diff}
        maxValue={24}
        text={`${diff}hrs`}
        styles={{
          background: {
            fill: '#008080',
          },
        }}
      />
      <h5>Start Time: {start}</h5>
      <h5>End Time: {end}</h5>
    </div>
  );
}

function calculateHours(dt2, dt1) {
  dt1 = new Date(dt1);
  dt2 = new Date(dt2);
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60 * 60;
  return Math.abs(Math.round(diff));
}

export default UserActivity;
