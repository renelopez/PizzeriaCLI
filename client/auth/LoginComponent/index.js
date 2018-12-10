import React from 'react';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button'
import Router from 'next/router';
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import gql from "graphql-tag";
import {compose} from "recompose";
import {graphql , Query} from "react-apollo";

const styles = theme =>({
  container:{
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField:{
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  paperContainer:{
    borderRadius:'6px',
    padding:'10px'
  }
});

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email :'',
      password :''
    };

  }

  onSubmit(ev){
    ev.preventDefault();
    Router.push('/dashboard');
  }

  handleChange(type){

  }


  render() {
    const { classes } = this.props;
      return (
            <form className={classes.container} noValidate autoComplete="off">
              <Paper className={classes.paperContainer}>
                <Grid container direction='column' spacing={8}>
                  <Grid item xs={12}>
                    <Typography component="h2" variant="h4" gutterBottom>
                      Pizzeria Management
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="standard-name"
                      label="Username"
                      className={classes.textField}
                      value={this.state.name}
                      onChange={this.handleChange('name')}
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="standard-name"
                      label="Password"
                      className={classes.textField}
                      value={this.state.name}
                      onChange={this.handleChange('name')}
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type='submit' variant="contained" color="primary">
                      Login
                    </Button>
                    <Button type='submit' variant="contained" color="secondary">
                      Register
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
              {console.log(this.props.data)}
            </form>
            )
  }
}



LoginComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default
compose(withStyles(styles))(LoginComponent)
        // graphql( gql`
        //   query getAllProducts{
        //     getAllProducts{
        //       id,
        //       name,
        //       description
        //     }
        //   }
        // `))(LoginComponent);
