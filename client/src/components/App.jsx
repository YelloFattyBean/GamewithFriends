/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';

import DateTime from './SubmissionForm';
import Calendar from './Calendar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: [],
      user: [],
    };
    this.addEvent = this.addEvent.bind(this);
    this.getEvent = this.getEvent.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  componentDidMount() {
    this.getEvent();
    this.getUser();
  }

  getEvent() {
    axios.get('/api/schedule')
      .then(({ data }) => {
        this.setState({ schedule: data });
      })
      .catch((err) => console.log(err));
  }

  getUser() {
    axios.get('/api/user')
      .then(({ data }) => {
        this.setState({ user: data });
      })
      .catch((err) => console.log(err));
  }

  addEvent(add) {
    axios.post('/api/schedule', add)
      .then(this.getEvent())
      .catch((err) => console.log(err));
  }

  render() {
    const { schedule, user } = this.state;
    const User = user.map((userId) => (
      <div key={userId.id}>
        {userId.username}
        &apos;s Calendar
      </div>
    ));
    if (schedule === []) {
      return <h1>loading...</h1>;
    }
    return (
      <div>
        <div className="headline">GamingwithFriends</div>
        <div>{User}</div>
        <div className="title">Schedule Availability:</div>
        <DateTime addEvent={this.addEvent} />
        <Calendar scheduleData={schedule} />
      </div>
    );
  }
}

export default App;
