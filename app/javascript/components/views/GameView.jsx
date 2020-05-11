import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import StrategyBoard from '../StrategyBoard';
import ShotDetails from '../ShotDetails';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '10px',
  },
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const GameView = () => {
  const classes = useStyles();

  const [shot, setShot] = useState(1);

  const nextShot = () => {
    setShot((prev) => prev + 1);
  };
  const prevShot = () => {
    setShot((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  };

  const save = () => {
    nextShot();
    // Save forms
  };

  return (
    <div className={classes.root}>
      <Box display="flex" justifyContent="space-around" height='70vh' >
        <StrategyBoard shot={shot} nextShot={nextShot} prevShot={prevShot}/>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          width="40%"
        >
          <Paper elevation={3}>
            <ShotDetails />
          </Paper>
          <Paper elevation={3}>
            <ShotDetails />
          </Paper>
          <Paper elevation={3}>
            <ShotDetails />
          </Paper>
          <div>
            <button onClick={save}>Save</button>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default GameView;
