import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {},
});

const PageSignUp = ({ classes }) => (
  <div className={classes.root}>
    SignUp
  </div>
);

PageSignUp.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
};

export default withStyles(styles)(PageSignUp);
