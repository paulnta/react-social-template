import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  root: {},
});

const ActivityListItem = ({ classes, children, title, subtitle, avatarUrl, ...props }) => (
  <ListItem
    dense
    className={classes.root}
    button
    {...props}
  >
    <ListItemAvatar>
      <Avatar src={avatarUrl} />
    </ListItemAvatar>
    <ListItemText
      primary={title}
      secondary={subtitle}
    />
  </ListItem>
);

ActivityListItem.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node,
  title: PropTypes.node,
  subtitle: PropTypes.node,
  avatarUrl: PropTypes.string,
};

export default withStyles(styles)(ActivityListItem);
