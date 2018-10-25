import React from 'react';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme =>({
  demo:{
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    minHeight:'100vh'
  },
  cardItem:{
    padding:'30vh'
  },
  visionLayout:{
    height: '100%'
  },
  root:{
    height:'100%'
  }
  // dashboardContainer:{
  //   display:'flex',
  //   alignItems:'center',
  //   justifyContent:'center',
  //   width:'100%',
  //   minHeight:'100vh'
  // },
  // cardContainer:{
  //   width:'calc(100% - 24px)',
  //   padding:'12px',
  //   borderRadius:'6px',
  //   //maxWidth:'85%',
  //   minHeight:'50vh',
  //  // display:'inline-flex',
  //  // flexWrap:'wrap'
  // },
  // cardHolder:{
  //   display:'inline-flex',
  //   alignItems:'center',
  //   flexWrap:'wrap',
  //   justifyContent:'space-around',
  //   alignContent:'stretch',
  //   width: '100%',
  // },
  // cardItem:{
  //   flexGrow:1,
  //   //flexBasis:'25%',
  //   padding:'15vh'
  // }
// {/*<div className={classes.dashboardContainer}>*/}
// {/*<Card className={classes.cardContainer}>*/}
// {/*/!*<Typography variant="h5" gutterBottom>*!/*/}
// {/*/!*Title*!/*/}
// {/*/!*</Typography>*!/*/}
// {/*<div className={classes.cardHolder}>*/}
// {/*<Card className={classes.cardItem}>*/}
// {/*<Typography variant="h5" gutterBottom>*/}
// {/*Title1*/}
// {/*</Typography>*/}
// {/*</Card>*/}
// {/*<Card className={classes.cardItem}>*/}
// {/*<Typography variant="h5" gutterBottom>*/}
// {/*Title 2*/}
// {/*</Typography>*/}
// {/*</Card>*/}
// {/*<Card className={classes.cardItem}>*/}
// {/*<Typography variant="h5" gutterBottom>*/}
// {/*Title 3*/}
// {/*</Typography>*/}
// {/*</Card>*/}
// {/*<Card className={classes.cardItem}>*/}
// {/*<Typography variant="h5" gutterBottom>*/}
// {/*Title 4*/}
// {/*</Typography>*/}
// {/*</Card>*/}
// {/*</div>*/}
// {/*</Card>*/}
// {/*</div>*/}
});

class Dashboard extends React.Component {


  render(){
    const { classes } = this.props;
    return (
      <Grid container justify="space-between" alignItems="center" className={classes.visionLayout} spacing={16}>
        {/*<Grid item xs={12}>*/}
          {/*<Paper>*/}
            {/*<Grid container direction="row" spacing={16} justify="center" alignItems="center">*/}
              <Grid key={0} item xs={4}>
                <Card>
                  <Typography  variant="h5" gutterBottom>Title 1</Typography>
                </Card>
              </Grid>
              <Grid key={1} item  xs={4} >
                <Card>
                  <Typography  variant="h5" gutterBottom>Title 2</Typography>
                </Card>
              </Grid>
              <Grid key={2} item  xs={4}>
                <Card>
                  <Typography  variant="h5" gutterBottom>Title 3</Typography>
                </Card>
              </Grid>
            {/*</Grid>*/}
          {/*</Paper>*/}
        {/*</Grid>*/}
      </Grid>

    )
  }
}

export default withStyles(styles)(Dashboard);
