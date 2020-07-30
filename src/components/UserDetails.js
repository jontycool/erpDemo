import React, { Component } from 'react';
import UserActivity from './UserActivity';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

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

    return formattedDate;
  };

  render() {
    const activity = this.state.userData.activity_periods;
    var filteredDates = [];
    if (
      activity.length !== 0 &&
      this.state.startDate !== null &&
      this.state.endDate !== null
    ) {
      filteredDates = activity.filter((a) => {
        var rangeStart = new Date(this.state.startDate);
        var rangeEnd = new Date(this.state.endDate);
        var start = new Date(this.calculateDate(a.start_time));
        var end = new Date(this.calculateDate(a.end_time));
        return start > rangeStart && end < rangeEnd;
      });
    }

    return (
      <div className='userDetails'>
        <div className='modal-header'>
          <h2>Name: {this.state.userData.real_name}</h2>
          <div className='sub-header'>
            <h4>ID: {this.state.userData.id}</h4>
            <h4>TimeZone: {this.state.userData.tz}</h4>
          </div>
        </div>

        <div className='date-selector'>
          <DatePicker
            selected={this.state.startDate}
            onChange={(date) =>
              this.setState({
                startDate: date,
              })
            }
            selectsStart
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            closeOnScroll={true}
            placeholderText='Enter Start Date'
            dateFormat='dd/MM/yyyy'
            showMonthDropdown
            showYearDropdown
          />
          <DatePicker
            selected={this.state.endDate}
            onChange={(date) => this.setState({ endDate: date })}
            selectsEnd
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            minDate={this.state.startDate}
            closeOnScroll={true}
            dateFormat='dd/MM/yyyy'
            placeholderText='Enter End Date'
            showMonthDropdown
            showYearDropdown
          />
        </div>

        <div className='modal-activity'>
          {this.state.endDate === null && this.state.startDate === null
            ? this.state.userData.activity_periods.map((period, i) => {
                return (
                  <UserActivity
                    key={i}
                    start={this.calculateDate(period.start_time)}
                    end={this.calculateDate(period.end_time)}
                  />
                );
              })
            : filteredDates.map((period, i) => {
                return (
                  <UserActivity
                    key={i}
                    start={this.calculateDate(period.start_time)}
                    end={this.calculateDate(period.end_time)}
                  />
                );
              })}
        </div>

        <button onClick={this.props.onClick} className='close-button'>
          Close
        </button>
      </div>
    );
  }
}

export default UserDetails;
