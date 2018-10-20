import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme =>({
  dashboardContainer:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    minHeight:'100vh'
  },
  cardContainer:{
    width:'calc(100% - 24px)',
    padding:'12px',
    borderRadius:'6px',
    maxWidth:'85%',
    minHeight:'50vh'
  },
  cardHolder:{
    display:'flex',
    alignItems:'center',
    flexWrap:'wrap',
    justifyContent:'space-around',
    alignContent:'stretch'


  },
  cardItem:{
    width:'50%'
  }
});

class Dashboard extends React.Component {


  render(){
    const { classes } = this.props;
    return (
      <div className={classes.dashboardContainer}>
        <Card className={classes.cardContainer}>
          {/*<Typography variant="h5" gutterBottom>*/}
           {/*Title*/}
          {/*</Typography>*/}
          <div className={classes.cardHolder}>
            <Card className={classes.cardItem}>
              <Typography variant="h5" gutterBottom>
              Title1
              </Typography>
            </Card>
            <Card className={classes.cardItem}>
              <Typography variant="h5" gutterBottom>
              Title 2
              </Typography>
            </Card>
            {/*<Card className={classes.cardItem}>*/}
              {/*<Typography variant="h5" gutterBottom>*/}
              {/*Title 3*/}
              {/*</Typography>*/}
            {/*</Card>*/}
            {/*<Card className={classes.cardItem}>*/}
              {/*<Typography variant="h5" gutterBottom>*/}
              {/*Title 4*/}
              {/*</Typography>*/}
            {/*</Card>*/}
          </div>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(Dashboard);
