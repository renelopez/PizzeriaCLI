import { withRouter } from 'next/router';
import React, {Component} from 'react';
import {compose} from "recompose";
import {withStyles} from "@material-ui/core";
import withLayout from "../components/Layout";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import StoreIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

const styles = theme =>({
  rootDashboard:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    minHeight:'100vh'
  },
  gridItem:{
    padding: theme.spacing.unit * 4
  }
});



class ProductDetails extends Component {
  render() {
    const url= this.props.router.query.id;
    const { classes } = this.props;
    return (
      <div className={classes.rootDashboard}>
        <Grid container spacing={16} alignItems='center' justify='space-around' >
          <Grid key={0} item sm={4} xs={12}>
            <Paper className={classes.gridItem}>
              <Grid container spacing={16} alignItems='center' justify='center'>
                <Grid key={1} item sm={12} xs={12}>
                  <TextField label="name" id='product-name' fullWidth />
                </Grid>
                <Grid key={2} item sm={12} xs={12}>
                  <TextField label="description" id='product-description' fullWidth/>
                </Grid>
                <Grid key={3} item sm={12} xs={12}>
                  <TextField label="recipe" id='product-recipe' fullWidth/>
                </Grid>
                <Grid key={4} item sm={12} xs={12}>
                  <TextField label="price" id='product-price' fullWidth/>
                </Grid>
                <Grid key={4} item sm={12} xs={12}>
                  <Button variant="contained" color="primary" >
                    Create
                  </Button>
                  <Button variant="contained" color="secondary">
                    Reset
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default compose(
  withStyles(styles),
  withLayout,
  withRouter
)(ProductDetails)
