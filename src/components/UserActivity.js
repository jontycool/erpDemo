import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function UserActivity({ start, end }) {
  const diff = calculateHours(end, start);
  return (
    <div className='eachActivity'>
      <CircularProgressbar
        value={diff[0] === 0 ? diff[1] : diff[0]}
        maxValue={diff[0] === 0 ? 1440 : 24}
        text={diff[0] === 0 ? `${diff[1]}mins` : `${diff[0]}hrs`}
        styles={{
          background: {
            fill: '#008080',
          },
        }}
      />
      <div className='time-container'>
        <div className='firstLine'>
          <h5>Start Time: {start}</h5>
          <h5>End Time: {end}</h5>
        </div>
        <div className='secondLine'>
          <h5>Total Time: {(diff[1] / 60).toFixed(2)} hrs</h5>
        </div>
      </div>
    </div>
  );
}

function calculateHours(dt2, dt1) {
  dt1 = new Date(dt1);
  dt2 = new Date(dt2);
  var diffhr = (dt2.getTime() - dt1.getTime()) / 1000;
  var diffmin = (dt2.getTime() - dt1.getTime()) / 1000;
  diffhr /= 60 * 60;
  diffmin /= 60;
  var timeDiff = [Math.abs(Math.round(diffhr)), Math.abs(Math.round(diffmin))];
  return timeDiff;
}

export default UserActivity;
