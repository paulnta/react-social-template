import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

const PostCard = ({ classes, className, children, title, subtitle, imageUrl, avatarUrl, body }) => (
  <Card className={className}>
    <CardHeader
      avatar={<Avatar src={avatarUrl} />}
      title={title}
      subheader={subtitle}
    />
    <CardMedia
      className={classes.media}
      image={imageUrl}
      title={title}
    />
    <CardContent>
      <Typography component="p">
        {body}
      </Typography>
    </CardContent>
    <CardActions>
      <IconButton>
        <FavoriteIcon />
      </IconButton>
      <IconButton>
        <ShareIcon />
      </IconButton>
    </CardActions>
  </Card>
);

PostCard.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imageUrl: PropTypes.string,
  avatarUrl: PropTypes.string,
  body: PropTypes.string,
};

export default withStyles(styles)(PostCard);
