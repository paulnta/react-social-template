import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

import InputBase from './InputBase';

const styles = theme => ({
  searchButton: {
    height: 30,
    width: 30,
    padding: 0,
  }
});

const InputSearch = ({ classes, ...props }) => (
  <InputBase
    endAdornment={
      <InputAdornment position="end">
        <IconButton
          tabIndex={-1}
          disabled={props.disabled}
          className={classes.searchButton}
          type="submit"
        >
          <Search />
        </IconButton>
      </InputAdornment>
    }
    {...props}
  />
);

InputSearch.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  disabled: PropTypes.bool,
};

export default withStyles(styles)(InputSearch);
