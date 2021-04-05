import logo from './logo.svg';
import './App.css';
import UtilitySelection from './views/UtilitySelection'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <UtilitySelection />
      </div>
    </ThemeProvider>
  );
}

export default App;
