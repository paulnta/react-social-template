import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '../components/AppBar';

const styles = theme => ({
  root: {
    minWidth: 800,
  },
  wrapper: {
    width: '100%',
    maxWidth: theme.layout.contentMaxWidth,
    margin: '0 auto',
    padding: theme.spacing.unit * 3,
    display: 'flex',
  },
  aside: {
    width: 260,
  },
  main: {
    marginLeft: theme.spacing.unit * 3,
    maxWidth: 500,
    flex: 1,
  },
});

const Layout = ({ classes, children, aside }) => (
  <div className={classes.root}>
    <AppBar />
    <main className={classes.wrapper}>
      <aside className={classes.aside}>
        {aside}
      </aside>
      <div className={classes.main}>
        {children}
      </div>
    </main>
  </div>
);

Layout.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node,
  aside: PropTypes.node,
};

export default withStyles(styles)(Layout);
