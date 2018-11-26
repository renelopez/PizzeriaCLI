import React from 'react';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withLayout from '../components/Layout';
import { compose } from 'recompose';

const styles = theme =>({
  rootDashboard:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    minHeight:'100vh'
  },
  mainGrid:{

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
          <Grid container spacing={16} className={classes.mainGrid} alignItems='center' justify='space-around' >
                  <Grid key={0} item sm={2} xs={12}>
                    <Paper className={classes.gridItem}>
                      <Typography  variant="h5" gutterBottom>Title 1</Typography>
                    </Paper>
                  </Grid>
                  <Grid key={1} item sm={2} xs={12}>
                    <Paper className={classes.gridItem}>
                      <Typography  variant="h5" gutterBottom>Title 2</Typography>
                    </Paper>
                  </Grid>
                  <Grid key={2} item sm={2} xs={12}>
                    <Paper className={classes.gridItem}>
                      <Typography  variant="h5" gutterBottom>Title 3</Typography>
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
