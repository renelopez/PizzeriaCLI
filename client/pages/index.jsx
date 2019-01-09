import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import LoginComponent from '../auth/LoginComponent';

import withData from '../lib/apollo';

const styles = () => ({
  container: {
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

function Index(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <LoginComponent />
    </div>
  );
}

Index.propTypes = {
  classes: PropTypes.shape({ container: {} }).isRequired
};

export default compose(
  withStyles(styles),
  withData
)(Index);
