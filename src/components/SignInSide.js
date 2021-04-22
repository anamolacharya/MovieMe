import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Movie Me
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://media.giphy.com/media/o1ncFNtD5eDUk/giphy.gif)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [signedIn, setSignedIn] = useState(false);


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    setSignedIn(false);

    let data = JSON.stringify({ email: email, password: password});

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: data
  };


  fetch('http://localhost:8000/api/signin', requestOptions)
      .then(async response => {
        const responseData = await response.json();

        if (!response.ok) {
          setSignedIn(false);
          const error = (data && data.message) || response.status;
          if (error == 500) {
          localStorage.setItem('signedIn', true);
          localStorage.setItem('user', email);
          }
          console.log(response);
          return Promise.reject(error);
        } else {
          setSignedIn(true);
          localStorage.setItem('signedIn', true);
          localStorage.setItem('user', email);
        }


      })
      .catch(error => {
        setError(error.toString());
        console.error('There was an error!', error);
    });


  }

  const handleSignOut = (e) => {
    e.preventDefault();
    localStorage.setItem('signedIn', false);
    localStorage.setItem('user', null);
    window.location.reload();
  }

  useEffect(() => {
    if (localStorage.getItem('signedIn') != "true") {
      localStorage.setItem('signedIn', false);
    }
  });

if (localStorage.getItem('signedIn') === "false" || localStorage.getItem('signedIn') === null) {
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={handleEmailChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
} else {
  return (
  <Grid container component="main" className={classes.root}>
  <CssBaseline />
  <Grid item xs={false} sm={4} md={7} className={classes.image} />
  <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        You are already signed in!
      </Typography>
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleSignOut}
        >
          Sign Out
        </Button>
        <Box mt={5}>
          <Copyright />
        </Box>
      </form>
    </div>
  </Grid>
</Grid>
);
}
  
}