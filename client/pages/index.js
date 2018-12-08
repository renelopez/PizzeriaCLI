import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import LoginComponent from '../auth/LoginComponent';

const styles = theme =>({
  container:{
    display:'flex',
    minHeight:'100vh',
    alignItems:'center',
    justifyContent:'center'
  },
});


class Index extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
          <LoginComponent/>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index)
