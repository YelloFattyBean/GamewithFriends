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
    };
    this.addEvent = this.addEvent.bind(this);
    this.getEvent = this.getEvent.bind(this);
  }

  componentDidMount() {
    this.getEvent();
  }

  getEvent() {
    axios.get('/api/schedule')
      .then(({ data }) => this.setState({ schedule: data }))
      .catch((err) => console.log(err));
  }

  addEvent(add) {
    axios.post('/api/schedule', add)
      .then(this.getEvent())
      .catch((err) => console.log(err));
  }

  render() {
    const { schedule } = this.state;
    console.log(schedule);
    if (schedule === []) {
      return <h1>loading...</h1>;
    }
    return (
      <div>
        <DateTime addEvent={this.addEvent} />
        <Calendar scheduleData={schedule} />
      </div>
    );
  }
}

export default App;
