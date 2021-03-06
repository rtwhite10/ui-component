import { Box, Card, CardContent, makeStyles } from '@material-ui/core';
import React from 'react';
import { LogoColored, Sdge} from './assets';
import LeapLogo from './assets/pngs/leap.png'
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles((theme) => ({
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin:'20px 0'
  },
  iconCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    textTransform: 'none',
    width: '120px',
    height: 40,
    padding: '1rem',
    '&:hover': {
      backgroundColor: '#fff'
    },
    '@media (max-width: 400px)': {
      height: 20
    }
  },
  linkIcon: {
    margin: '0 1rem'
  },
  icons: {
    height: '100%',
    maxHeight: 30,
    width: 50,
    minWidth:25
  },
  pngIcon: {
    height: '100%',
    maxHeight: 30,
    width: 50,
    minWidth:25,
    '@media (max-width: 400px)': {
      width: '100%'
    }
  }
}))


export default function IconSection() {
  const classes = useStyles()

  return (
  <CardContent className={classes.iconContainer}>
    <Card elevation={4} className={classes.iconCard} >
     <LogoColored />
    </Card>
    <Box className={classes.linkIcon}>
      <LinkIcon />
    </Box>
    <Card elevation={4} className={classes.iconCard} >
      <Box className={classes.icons}>
        <Sdge />
      </Box>
      <Box className={classes.icons}>
        <img className={classes.pngIcon} src={LeapLogo} alt="Leap"/>
      </Box>
    </Card>
  </CardContent>
  )
}