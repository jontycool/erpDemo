import React, { Component } from 'react';
import UserActivity from './UserActivity';

class UserDetails extends Component {
  state = {
    userData: { activity_periods: [] },
    startDate: null,
    endDate: null,
  };

  componentDidMount() {
    this.setState({ userData: this.props.user });
  }

  calculateDate = (date) => {
    var dateArray = date.split(' ');
    var time = dateArray[dateArray.length - 1];
    var timeArray = time.slice(0, -2).split(':');
    var hr = Number(timeArray[0]);
    var mm = timeArray[1];

    if (time.slice(-2) === 'PM' && hr < 12) {
      hr += 12;
    }
    if (time.slice(-2) === 'AM' && hr === 12) {
      hr -= 12;
    }

    var hh = hr.toString();
    var formattedDate =
      dateArray[0] +
      ' ' +
      dateArray[1] +
      ' ' +
      dateArray[2] +
      ' ' +
      hh +
      ':' +
      mm;

    console.log(formattedDate);
    return formattedDate;
  };

  render() {
    return (
      <div className='userDetails'>
        <div className='modal-header'>
          <h2>Name: {this.state.userData.real_name}</h2>
          <div className='sub-header'>
            <h4>ID: {this.state.userData.id}</h4>
            <h4>TimeZone: {this.state.userData.tz}</h4>
          </div>
        </div>

        <div className='modal-activity'>
          {this.state.startDate === null ? (
            this.state.userData.activity_periods.map((period, i) => {
              return (
                <UserActivity
                  key={i}
                  start={this.calculateDate(period.start_time)}
                  end={this.calculateDate(period.end_time)}
                />
              );
            })
          ) : (
            <h1>Start Date Populated!</h1>
          )}
        </div>

        <button onClick={this.props.onClick} className='close-button'>
          Close
        </button>
      </div>
    );
  }
}

export default UserDetails;
