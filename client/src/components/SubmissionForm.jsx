/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// eslint-disable-next-line no-unused-vars
const styles = (theme) => ({
  input: {
    color: 'lightslategrey',
  },
});

// eslint-disable-next-line react/prop-types
function DateTime({ addEvent, classes, ...rest }) {
  const [startDate, handleDateChange] = useState(new Date());
  const [endDate, handleEndDateChange] = useState(new Date());
  const [title, setTitle] = useState();
  const [userName, setUserName] = useState();

  const clearState = () => {
    setUserName('');
    setTitle('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addEvent({
      startDate, endDate, title, userName,
    });
    clearState();
  };

  const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, black 30%, grey 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 36,
      padding: '0 30px',
    },
  });

  const classed = useStyles();

  return (
    <form onSubmit={handleSubmit}>
      <div className="titles">
        Username:
        <input id="box" type="text" name="userName" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Username" />
      </div>
      <div className="titles">
        Game:
        <input id="box" type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Game" />
      </div>
      <div className="titles">Start Time:</div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DateTimePicker
          name="startDate"
          value={startDate}
          onChange={handleDateChange}
          {...rest}
          leftArrowIcon={<KeyboardArrowLeft />}
          rightArrowIcon={<KeyboardArrowRight />}
          InputProps={{ className: classes.input }}
        />
      </MuiPickersUtilsProvider>
      <div className="titles">End Time:</div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DateTimePicker
          name="endDate"
          value={endDate}
          onChange={handleEndDateChange}
          {...rest}
          leftArrowIcon={<KeyboardArrowLeft />}
          rightArrowIcon={<KeyboardArrowRight />}
          InputProps={{ className: classes.input }}
        />
      </MuiPickersUtilsProvider>
      <div>
        <Button className={classed.root} type="submit">Schedule</Button>
      </div>
    </form>
  );
}

export default withStyles(styles)(DateTime);
