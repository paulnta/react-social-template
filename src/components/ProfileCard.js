import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography'; import ProfileStats from './ProfileStats';
;

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
    padding: '8px 16px',
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

const ProfileCard = ({ classes, children, ...props }) => (
  <Paper elevation={1} className={classes.root}>
    <div className={classes.header} style={{ backgroundImage: `url('https://source.unsplash.com/collection/841904')` }}></div>
    <div className={classes.content}>
      <Avatar className={classes.avatar} src="https://source.unsplash.com/collection/895539" />
      <div className={classes.userFields}>
        <Typography variant="h6">
          <Link to="/profile/paulnta">Paul Nta</Link>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <Link to="/profile/paulnta">@paulnta</Link>
        </Typography>
      </div>
    </div>
    <ProfileStats
      posts={112}
      followers={234}
      following={21}
    />
  </Paper>
);

ProfileCard.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node,
};

export default withStyles(styles)(ProfileCard);
