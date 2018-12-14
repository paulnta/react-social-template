import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const styles = theme => ({
  root: {
    background: theme.palette.background.paper,
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit / 2,
    borderRadius: theme.shape.borderRadius,
  },
});

const InputBase = ({ classes, className, value, onChange, placeholder, ...props }) => (
  <Input
    className={cx(classes.root, className)}
    onChange={onChange}
    value={value}
    placeholder={placeholder}
    disableUnderline
    fullWidth
    {...props}
  />
);

InputBase.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default withStyles(styles)(InputBase);
