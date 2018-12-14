import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLogin from '../components/FormLogin';

const styles = theme => ({
  root: {
    padding: '120px 16px 16px',
  },
  form: {
    width: '100%',
    maxWidth: 360,
    margin: '0 auto',
  },
});

const PageLogin = ({ classes, history }) => {
  const handleSubmit = (values) => {
    console.log('submitting formValues', values);
    history.push('/');
  };

  return (
    <div className={classes.root}>
      <FormLogin
        className={classes.form}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

PageLogin.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  history: PropTypes.object,
};

export default withStyles(styles)(PageLogin);
