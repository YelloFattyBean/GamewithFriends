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
import Modal from '@material-ui/core/Modal';

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
  // eslint-disable-next-line no-use-before-define
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  function getModalStyle() {
    return {
      transform: 'scale(2) translate(50%, 50%)',
    };
  }
  const clearState = () => {
    setUserName('');
    setTitle('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(false);
    addEvent({
      startDate, endDate, title, userName,
    });
    clearState();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      background: 'linear-gradient(45deg, black 30%, grey 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 36,
      padding: '0 30px',
    },
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classed = useStyles();

  return (
    <div>
      <button type="button" className={classed.root} onClick={handleOpen}>
        Open Scheduler
      </button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <form
          onSubmit={handleSubmit}
          style={modalStyle}
          className={classed.paper}
        >
          <div>
            Username:
            <input id="box" type="text" name="userName" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Username" required="required" />
          </div>
          <div className="titles">
            Game:
            <input id="box" type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Game" required="required" />
          </div>
          <div className="titles">Start Time:</div>
          <MuiPickersUtilsProvider utils={DateFnsUtils} required="required">
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
          <MuiPickersUtilsProvider utils={DateFnsUtils} required="required">
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
      </Modal>
    </div>
  );
}

export default withStyles(styles)(DateTime);
