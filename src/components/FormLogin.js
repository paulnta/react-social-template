import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const styles = theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  submitButton: {
    marginTop: 24,
  }
});

const FormLogin = ({ classes, className, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <Paper className={className}>
      <CardContent>
        <Typography variant="h4" align="center">Login</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            type="text"
            label="Email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            type="password"
            label="Password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            className={classes.submitButton}
            variant="contained"
            type="submit"
            color="primary"
          >
            Login
          </Button>
        </form>
      </CardContent>
    </Paper>
  );
};

FormLogin.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  onSubmit: PropTypes.func,
};

FormLogin.defaultProps = {
  onSubmit: () => { },
};

export default withStyles(styles)(FormLogin);
