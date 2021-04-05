import { Box, Button, Card, CardActions, CardContent, Container, Grid, Icon, InputAdornment, List, ListItem, ListItemIcon, ListItemText, makeStyles, MenuItem, SvgIcon, TextField, Typography, withStyles } from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import BulletListItem from './BulletListItem'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { ReactComponent as OptiwattIcon } from './assets/logo-colored.svg'
import OptiwattLogo from './assets/OptiwattLogo'

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
  selectorContainer: {
    paddingTop: 0
  },
  selectIcon: {
    fontSize: 20,
    paddingBottom: '7px',
    color: theme.palette.secondary.main
  },
  inputSelection: {
    width: ''
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin:'20px 0'
  },
  iconCard: {
    backgroundColor: '#fff',
    textTransform: 'none',
    width: '150px',
    padding: '1rem',
    '&:hover': {
      backgroundColor: '#fff'
    }
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
    // fontWeight: 'bold'
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
        <Grid item xs={12}>
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
            <CardActions className={classes.selectorContainer}>
              <TextField 
                style={{width: '100%'}}
                select
                // className={classes.test}
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
            <CardActions className={classes.iconContainer}>
              {/* <Card className={classes.iconCard}> */}
               
                {/* <SvgIcon className={classes.svg}>
                  <OptiwattIcon/>
                </SvgIcon> */}
                {/* <OptiwattLogo />
              </Card>
             
              <LinkIcon />
              <Button disableRipple variant="contained" className={classes.iconCard}>Sdge leap</Button> */}
            </CardActions>
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
                    You can opt-out at anytime"
                  />
                </ListItem>
              </List>
            
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

            <CardContent>
              <Typography 
                className={classes.disclosureText}
                align="left" 
                variant="body2">
                  By clicking Authorize, Leap, our 3rd party provider, will connect to your utility company meter and enable Optiwatt to support the gird.
              </Typography>
            </CardContent>

          </Card>
        </Grid>
        <Grid item xs={12}> 
          <StepTracker />
        </Grid>
      </Grid>
    </Container>
  )
}