/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import { styled } from '@material-ui/core/styles';
import { compose, spacing, palette } from '@material-ui/system';

import DateTime from './SubmissionForm';
import Calendar from './Calendar';
import Headline from './Headline';

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
    if (schedule === []) {
      return <h1>loading...</h1>;
    }
    return (
      <Background bgcolor="#3e6297">
        <Headline User={user} />
        <DateTime addEvent={this.addEvent} />
        <Calendar scheduleData={schedule} />
      </Background>
    );
  }
}

const Background = styled('div')(compose(spacing, palette));
export default App;
