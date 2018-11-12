import React from 'react';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme =>({

});

class Dashboard extends React.Component {


  render(){
    const { classes } = this.props;
    return (
        <Grid container spacing={16} >
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
        </Grid>

    )
  }
}

export default withStyles(styles)(Dashboard);
