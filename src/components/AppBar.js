import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import Popover from '@material-ui/core/Popover';
import Toolbar from '@material-ui/core/Toolbar';
import AppBarBase from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import NotificationIcon from '@material-ui/icons/Notifications';

import InputSearch from './InputSearch';
import ActivityListItem from './ActivityListItem';

const styles = theme => ({
  root: {},
  appBar: {
    background: theme.palette.background.paper,
  },
  toolbar: {
    width: '100%',
    maxWidth: theme.layout.contentMaxWidth,
    margin: '0 auto',
  },
  flex: {
    flexGrow: 1,
  },
  search: {
    marginLeft: theme.spacing.unit * 4,
    background: theme.palette.grey[200],
    width: 250,
  },
  icon: {
    marginLeft: theme.spacing.unit * 2,
  }
});


const AppBar = ({ classes, children }) => {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const notificationButton = useRef();

  const handleToggleNotification = () => {
    setNotificationOpen(!notificationOpen);
  };

  return (
    <AppBarBase className={classes.appBar} position="static" color="default">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit">
          <Link to="/">Social app</Link>
        </Typography>
        <InputSearch
          className={classes.search}
          placeholder="Search"
          fullWidth={false}
        />
        <div className={classes.flex} />
        <IconButton
          className={classes.icon}
          onClick={handleToggleNotification}
          buttonRef={notificationButton}
        >
          <NotificationIcon />
        </IconButton>
        <Popover
          open={notificationOpen}
          anchorEl={notificationButton.current}
          onClose={handleToggleNotification}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <List>
            <ActivityListItem
              title="Anna commented your post"
              subtitle="1 hour ago"
              avatarUrl="https://source.unsplash.com/b1Hg7QI-zcc/150x150"
            />
            <ActivityListItem
              title="Anna started following you"
              subtitle="2 days ago"
              avatarUrl="https://source.unsplash.com/b1Hg7QI-zcc/150x150"
            />
            <ActivityListItem
              title="James liked your post"
              subtitle="3 days ago"
              avatarUrl="https://source.unsplash.com/d2MSDujJl2g/150x150"
            />
            <ActivityListItem
              title="James started following you"
              subtitle="1 week ago"
              avatarUrl="https://source.unsplash.com/d2MSDujJl2g/150x150"
            />
          </List>
        </Popover>
        <Avatar
          className={classes.icon}
          src="https://source.unsplash.com/collection/895539"
        />
      </Toolbar>
    </AppBarBase >
  );
};

AppBar.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node,
};

export default withStyles(styles)(AppBar);
