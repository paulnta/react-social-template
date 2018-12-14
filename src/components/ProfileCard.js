import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography'; import ProfileStats from './ProfileStats';

const styles = theme => ({
  root: {
    overflow: 'hidden',
  },
  header: {
    height: 100,
    background: theme.palette.grey[200],
  },
  content: {
    position: 'relative',
    display: 'flex',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  avatar: {
    position: 'absolute',
    top: -26,
    left: 16,
    height: 72,
    width: 72,
    border: `5px solid ${theme.palette.common.white}`,
    background: theme.palette.grey[200],
  },
  userFields: {
    paddingLeft: 88,
  },
});

const ProfileCard = ({ classes, displayName, username, avatarUrl, profileUrl, coverUrl, stats }) => {
  const backgroundStyle = coverUrl
    ? { backgroundImage: `url('${coverUrl}')` }
    : null;

  return (
    <Paper elevation={1} className={classes.root}>
      <div className={classes.header} style={backgroundStyle} />
      <div className={classes.content}>
        <Link to={profileUrl}>
          <Avatar className={classes.avatar} src={avatarUrl} />
        </Link>
        <div className={classes.userFields}>
          <Typography variant="h6">
            <Link to={profileUrl}>{displayName}</Link>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <Link to={profileUrl}>@{username}</Link>
          </Typography>
        </div>
      </div>
      <ProfileStats
        posts={stats.posts}
        followers={stats.followers}
        following={stats.following}
      />
    </Paper>
  );
};

ProfileCard.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  displayName: PropTypes.string,
  username: PropTypes.string,
  avatarUrl: PropTypes.string,
  coverUrl: PropTypes.string,
  profileUrl: PropTypes.string,
  stats: PropTypes.shape({
    posts: PropTypes.number,
    followers: PropTypes.number,
    following: PropTypes.number,
  })
};

export default withStyles(styles)(ProfileCard);
