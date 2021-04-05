import { CardActions, FormControl, InputAdornment, makeStyles, MenuItem, Select, TextField } from '@material-ui/core';
import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles((theme) => ({
  selectorContainer: {
    paddingTop: 0
  },
  selectIcon: {
    fontSize: 20,
    paddingBottom: '7px',
    color: theme.palette.secondary.main
  }
}))


const dropDownData = ['SDGE']

export default function DropDownSelect() {
  const [selectedUtility, SetSelectedUtility] = React.useState()
  const classes = useStyles();

  const handleSelectedUtility = (e) => {
    SetSelectedUtility(e.target.value);
  }

  return (
    <CardActions className={classes.selectorContainer}>
    <TextField 
      style={{width: '100%'}}
      select
      value={selectedUtility}
      inputProps={{style: {textAlign: 'center', backgroundColor: '#fff'}}}
      onChange={handleSelectedUtility}

      InputProps={{
        
        startAdornment:( selectedUtility &&
          <InputAdornment position="start">
            <CheckCircleIcon className={classes.selectIcon} />
          </InputAdornment>
        )
      }}
    >
      {dropDownData.map((item,index) => (
        <MenuItem key={`${item}${index}`} value={item}>
          {item}
        </MenuItem>
      ))}
    </TextField>
  </CardActions>
  )
}