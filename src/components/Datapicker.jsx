import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    height: 60,
  },
}));

export default function Datepicker(props) {
  const classes = useStyles();

  const eventData = (e) => {
    props.eventData(e)
  }

  return (
    <form noValidate>
      <TextField onChange={e => eventData(e.target.value)}
        id="date"
        label="Выберите дату"
        type="date"
        defaultValue="2021-09-10"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}