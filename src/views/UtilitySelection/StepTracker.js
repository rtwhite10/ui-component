import { Box, Button, Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {

  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  pageStep: {
    width: 80,
    height: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'space-between',
    
  },
  completed: {
    fontSize: 42,
    color: theme.palette.secondary.main
  },
  cirlce: {
    height: 35,
    width: 35,
    borderRadius: 50,
    margin: 5,
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: theme.palette.primary.main
  },
  circleText: {
    fontSize: '1rem',
    color: '#fff',
    paddingBottom: '2px'
  },
  text: {
    height: 35,
    fontSize: 12,
    textAlign: 'center',
  }
}))


export default function StepTracker() {
  const classes = useStyles()

  return (
    <Card elevation={4} className={classes.root}>
      <CardContent className={classes.container}>
        <Box className={classes.pageStep}>
          <CheckCircleIcon className={classes.completed} />
          <Typography className={classes.text} variant="body1">
            Connect Tesla
          </Typography>
        </Box>
        <Box className={classes.pageStep}>
          <CheckCircleIcon className={classes.completed} />
          <Typography className={classes.text} variant="body1">
          Add Home
          </Typography>
        </Box>
        <Box className={classes.pageStep}>
          <Box className={classes.cirlce}>
          <p className={classes.circleText}>3</p>
          </Box>
          <Typography className={classes.text} variant="body1">
          Select Utility
          </Typography>
        </Box>
        <Box className={classes.pageStep}>
          <Box className={classes.cirlce} style={{backgroundColor: 'lightgrey'}}>
            <p className={classes.circleText} >4</p>
          </Box>
          <Typography className={classes.text} style={{opacity: '0.4'}} variant="body1">
          Select Electric Plan
          </Typography>
        </Box> 
      </CardContent>
    </Card>
  )
}