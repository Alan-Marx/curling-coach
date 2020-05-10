import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ShotRating = ({ rating, setRating }) => {
  const classes = useStyles();

  const handleChange = (event) => {
    setRating(event.target.value);
  };

  return (
    <FormControl required className={classes.formControl}>
      <InputLabel id="shot-rating">Rating</InputLabel>
      <Select
        labelId="shot-rating"
        id="rating"
        value={rating}
        onChange={handleChange}
        displayEmpty
        className={classes.selectEmpty}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
      </Select>
      <FormHelperText>Required</FormHelperText>
    </FormControl>
  );
};

export default ShotRating;