import { Box, Button, Card, CardActions, CardContent, Container, Grid, Icon, InputAdornment, List, ListItem, ListItemIcon, ListItemText, makeStyles, MenuItem, SvgIcon, TextField, Typography, withStyles } from '@material-ui/core';
import IconSection from './IconSection'
import BulletListItem from './BulletListItem'
import DropDownSelect from './DropDownSelect'
import {LogoColored, Sdge} from './assets/index'
import LeapLogo from './assets/pngs/leap.png'

import React from 'react';
import StepTracker from './StepTracker';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  utilityContainer: {
    padding: '1rem 2rem',
  },
  heading: {
    fontSize: '1rem',
    fontWeight: 'bold'
  },
  subHeading: {
    fontSize: '1rem',
    fontWeight: '200'
  },

  inputSelection: {
    width: ''
  },
  listHeader: {
    fontSize: '1rem',
    fontWeight: 'bold'
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  button: {
    width: '150px',
    textTransform: 'none',
    borderRadius: 20,
    fontSize: '14px',
  },
  disclosureText: {
    fontSize: '10px',
    opacity: '0.8',
    width: '100%',
    maxWidth: '325px',
    minWidth: '175px'
  },
  stepsContainer: {
    width: '100%',
  },
  test: {
    textAlign: 'center'
  },
  svg: {
    height: '90%',
    width: '90%',
  
  }
}))

const dropDownData = ['SDGE']

export default function UtilitySelection() {
  const [selectedUtility, SetSelectedUtility] = React.useState()
  const classes = useStyles();

  const handleSelectedUtility = (e) => {
    SetSelectedUtility(e.target.value);
  }

  return (
    <Container maxWidth="sm">
      <Grid container spacing={5}>

        {/* Main content card */}
        <Grid item xs={12}>

          {/* Top section headers  */}
          <Card className={classes.utilityContainer}>
            <CardContent>
              <Grid container align="center" direction="column" spacing={2}>
                <Grid item>
                  <Typography className={classes.heading} variant="h1">
                    Select Utility
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.subHeading} variant="h3">
                    Select your utility provider...
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>

            {/* Selection component */}
            <DropDownSelect />
            
            {/* Icon cards below selection tool */}
            <IconSection />
            
            {/* Main body text */}
            <CardContent>
              <Typography 
                align="left"
                className={classes.listHeader} 
                variant="h4"
              >
                Support Your Local Grid
              </Typography>
              <List >
                <ListItem disableGutters alignItems="left">
                  <BulletListItem text="
                    Help reduce CO2 and grid blackouts by delaying charging during high electricity demand."
                  />
                </ListItem>
                <ListItem disableGutters alignItems="left">
                  <BulletListItem text="
                    Optiwatt will notify you prior to these rare events and automatically resume charging immediately afterwards."
                    />
                </ListItem>
                <ListItem disableGutters alignItems="left">
                  <BulletListItem text="
                    You can opt-out at anytime."
                  />
                </ListItem>
              </List>
            
            {/* Action buttons */}
              <Box className={classes.buttonContainer}>
                <Button 
                  className={classes.button} 
                  variant="contained" 
                  style={{fontWeight: "bold"}}
                  color="primary"
                  disableElevation>
                    Authorize
                </Button>
                <Button 
                  className={classes.button} 
                  color="primary">
                    Skip for later
                </Button>
              </Box>
            </CardContent>

            {/* Disclosure text */}
            <CardContent>
              <Typography 
                className={classes.disclosureText}
                align="left" 
                variant="body2">
                  By clicking Authorize, Leap, our 3rd party provider, will connect to your utility company meter and enable Optiwat to support the gird.
              </Typography>
            </CardContent>

          </Card>
        </Grid>

        {/* Bottom card for page tracking  */}
        <Grid item xs={12}> 
          <StepTracker />
        </Grid>
      </Grid>
    </Container>
  )
}