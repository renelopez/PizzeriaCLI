import React from 'react';
import Link from "next/link";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withLayout from '../components/Layout';
import { compose } from 'recompose';
import StoreIcon from '@material-ui/icons/Store';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


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

class Dashboard extends React.Component {


  render(){
    const { classes } = this.props;
    return (
      <div className={classes.rootDashboard}>
          <Grid container spacing={16} alignItems='center' justify='space-around' >
                  <Grid key={0} item sm={2} xs={12}>
                    <Paper className={classes.gridItem}>
                      <StoreIcon />
                      <Link as={`/product`} href={{pathname:'/product'}}>
                        <a><Typography  variant="h5" gutterBottom>Products</Typography></a>
                      </Link>
                    </Paper>
                  </Grid>
                  <Grid key={1} item sm={2} xs={12}>
                    <Paper className={classes.gridItem}>
                      <TrendingUpIcon />
                      <Link as={`/sales`} href={{pathname:'/sales'}}>
                        <a><Typography  variant="h5" gutterBottom>Sales</Typography></a>
                      </Link>
                    </Paper>
                  </Grid>
                  <Grid key={2} item sm={2} xs={12}>
                    <Paper className={classes.gridItem}>
                      <ShoppingBasketIcon />
                      <Link as={`/ingredients`} href={{pathname:'/ingredients'}}>
                        <a><Typography  variant="h5" gutterBottom>Ingredients</Typography></a>
                      </Link>
                    </Paper>
                  </Grid>
          </Grid>
      </div>

    )
  }
}

export default compose(
  withStyles(styles),
  withLayout
)(Dashboard)
