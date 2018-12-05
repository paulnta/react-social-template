import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    padding: '8px 16px',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
});

const ProfileStats = ({ classes, className, posts, followers, following }) => (
  <div className={cx(classes.root, className)}>
    <div>
      <Typography variant="h6">{posts}</Typography>
      <Typography variant="caption" color="textSecondary">Posts</Typography>
    </div>
    <div>
      <Typography variant="h6">{followers}</Typography>
      <Typography variant="caption" color="textSecondary">Followers</Typography>
    </div>
    <div>
      <Typography variant="h6">{following}</Typography>
      <Typography variant="caption" color="textSecondary">Following</Typography>
    </div>
  </div>
);

ProfileStats.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  posts: PropTypes.number,
  followers: PropTypes.number,
  following: PropTypes.number,
};

export default withStyles(styles)(ProfileStats);
