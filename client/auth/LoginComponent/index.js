import React from 'react';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme =>({
  container:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:300,
    height:500
  },
  formItem:{
    'flex-grow':1
  }
});


class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email :'',
      password :''
    }
  }

  onSubmit(){

  }

  handleEmailChange(ev){
    this.state.set('email',ev.currentTarget.value)
  }

  handlePasswordChange(ev){
    this.state.set('email',ev.currentTarget.value)
  }



  render() {
    const { classes } = this.props;
      return (
          <Card className={classes.container}>
            <TextField id="loginEmail" className={classes.formItem} label="Email" value={this.state.email} onChange={this.handleEmailChange} />
            <TextField id="loginPassword" className={classes.formItem}  label="Password" value={this.state.password} onChange={this.handlePasswordChange} />
          </Card>
      )
  }
}

LoginComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginComponent);
