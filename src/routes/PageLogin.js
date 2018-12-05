import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {},
});

const PageLogin = ({ classes }) => (
  <div className={classes.root}>
    Login
  </div>
);

PageLogin.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
};

export default withStyles(styles)(PageLogin);
