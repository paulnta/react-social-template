import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormSignUp from '../components/FormSignUp';

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

const PageSignUp = ({ classes, history }) => {
  const handleSubmit = (values) => {
    console.log('submitting formValues', values);
    history.push('/');
  };

  return (
    <div className={classes.root}>
      <FormSignUp
        className={classes.form}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

PageSignUp.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  history: PropTypes.object,
};

export default withStyles(styles)(PageSignUp);
