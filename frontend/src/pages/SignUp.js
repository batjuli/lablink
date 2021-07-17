import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { FormHelperText } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import { useHistory, Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  logo: {
    textAlign: 'center'
  },

  signUp: {
    display: 'block',
    fontSize: '30px',
    padding: '0px',
    margin: '20px',
  },

  signUpContainer: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'column',
    width: '30%',
    boxShadow: '0px 0px 10px 2px #3d3d3d',
    padding: 'px',
    borderRadius: '5px',
    alignItems: 'center',
  },

  textEntry: {
    margin: '10px',
  },

  forgotPassword: {
    textAlign: 'right',
    fontSize: '10px',
    display: 'block',
  },

  button: {
    width: '50%',
    margin: '5px',
  },
}));

const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <p className={classes.logo}>LabLink</p>
      <form>
        <div className={classes.signUpContainer}>
          <p className={classes.signUp}>Sign Up</p>

          <TextField
            className={classes.textEntry}
            variant='outlined'
            label='Email address'
            name='email'
            required
          />
          <TextField
            className={classes.textEntry}
            variant='outlined'
            label='Password'
            type='password'
            name='password'
            required
          />
          <TextField
            className={classes.textEntry}
            variant='outlined'
            label='Re-enter password'
            type='password'
            name='reenterPassword'
            required
          />
          <Button
            className={classes.button}
            color='primary'
            variant='contained'
            type='submit'
            fullWidth
          >
            Sign Up
          </Button>

          <p>Already got an account?</p>

          <Button
            className={classes.button}
            color='secondary'
            variant='contained'
            fullWidth
            component={Link}
            to='/'
          >
            Log In
          </Button>

        </div>
      </form>
    </div>
  );
};

export default Login;