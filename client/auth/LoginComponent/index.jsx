import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button';
import Router from 'next/router';
import Grid from '@material-ui/core/Grid/Grid';
import Paper from '@material-ui/core/Paper/Paper';
import { compose } from 'recompose';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  paperContainer: {
    borderRadius: '6px',
    padding: '10px'
  }
});

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  onSubmit = ev => {
    ev.preventDefault();
    Router.push('/dashboard');
  };

  handleChange = ev => {
    this.setState({
      [ev.currentTarget.id]: ev.currentTarget.value
    });
    ev.preventDefault();
    Router.push('/dashboard');
  };

  render() {
    const { classes } = this.props;
    const { email, password } = this.state;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Paper className={classes.paperContainer}>
          <Grid container direction="column" spacing={8}>
            <Grid item xs={12}>
              <Typography component="h2" variant="h4" gutterBottom>
                Pizzeria Management
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                label="email"
                className={classes.textField}
                value={email}
                onChange={this.handleChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                label="Password"
                className={classes.textField}
                value={password}
                onChange={this.handleChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
              <Button type="submit" variant="contained" color="secondary">
                Register
              </Button>
            </Grid>
          </Grid>
        </Paper>
        {console.log(this.props.data)}
      </form>
    );
  }
}

LoginComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles))(LoginComponent);
