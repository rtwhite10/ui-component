import { CardActions, FormControl, makeStyles, MenuItem, Select, TextField } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {

  },
  container: {
    // width: '100%',
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
    }
  },
  select: {
    "&:before": {
      // normal
      borderBottom: "1px solid orange"
    },
    "&:after": {
      // focused
      backgroundColor: "black !important",
      borderBottom: "1px solid red"
    },
    "& ul": {
        backgroundColor: "#fff",
    },
    "& li": {
        fontSize: 12,
    },
},
  test: {
    backgroundColor: '#fff'
  }
}))


const dropDownData = ['SDGE']

export default function DropDownSelect() {
  const classes = useStyles()
  return (
    <CardActions className={classes.root}>
    <TextField 
      style={{width: '100%'}}
      select
      className={classes.test}
      inputProps={{style: {backgroundColor: '#fff'}}}
      InputProps={{
        backgroundColor: '#fff',
        // alignItems: 'left',
        classes: {
          root:classes.root
        }
      }}
    >
      {dropDownData.map((item,index) => (
        <MenuItem key={`${item}${index}`} value={item}>
          {item}
        </MenuItem>
      ))}
    </TextField>
    {/* <FormControl fullWidth focused={true} className={classes.container}>
      <Select
        className={classes.select}
        MenuProps={{
          classes: {
            paper: classes.select
          }
        }}
      >
      {dropDownData.map((item,index) => (
        <MenuItem MenuProps={{
          classes: {
            root: classes.test
          }
        }} key={`${item}${index}`} value={item}>
          {item}
        </MenuItem>
      ))}
      </Select>
    </FormControl> */}
  </CardActions>
  )
}