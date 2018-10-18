import React from 'react';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button'
import Router from 'next/router';

const styles = theme =>({
  containerForm:{
    width:'calc(100% -48px)',
    display:'flex',
    flexDirection:'column',
    padding:'24px',
    borderRadius:'6px',
    justifyContent:'space-between'
  },
  containerCard:{
    display:'inline-flex',
    flexDirection:'column'
  },
  formItem:{
    marginTop:'16px',
    marginBottom:'16px'
  }
});


class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      email :'',
      password :''
    };

  }

  onSubmit(ev){
    ev.preventDefault();
    Router.push('/dashboard');
  }

  handleEmailChange(ev){
    this.setState({'email':ev.currentTarget.value})
  }

  handlePasswordChange(ev){
    this.setState({'email':ev.currentTarget.value})
  }



  render() {
    const { classes } = this.props;
      return (
        <form onSubmit={this.onSubmit}>
          <Card className={classes.containerForm}>
            <Typography component="h2" variant="h4" gutterBottom>
              Pizzeria Management
            </Typography>
            <TextField id="loginEmail" className={classes.formItem} label="Email" value={this.state.email} onChange={this.handleEmailChange} />
            <TextField id="loginPassword" className={classes.formItem}  label="Password" value={this.state.password} onChange={this.handlePasswordChange} />
            <Button type='submit' variant="contained" color="primary" className={classes.formItem}>
             Login
            </Button>
            <Button variant="contained" color="secondary" className={classes.formItem}>
              Register
            </Button>
          </Card>
        </form>

      )
  }
}

LoginComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginComponent);
