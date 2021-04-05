import { Box, makeStyles, Typography } from '@material-ui/core'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row'
  },
  bullet: {
    marginRight: '10px'
  },
  listText: {
    opacity: '0.8'
  }
}))

export default function BulletListItem({text}) {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.bullet}>
        <FiberManualRecordIcon style={{fontSize: '10px'}} />
      </Box>
      <Typography className={classes.listText} variant="body1">
        {text}
      </Typography>
    </Box>
  )
}