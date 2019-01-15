import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  rootDashboard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh'
  },
  gridItem: {
    padding: theme.spacing.unit * 4
  }
});

function ProductForm({ classes, onProductChange, createProduct }) {
  return (
    <div className={classes.rootDashboard}>
      <Grid container spacing={16} alignItems="center" justify="space-around">
        <Grid key={0} item sm={4} xs={12}>
          <Paper className={classes.gridItem}>
            <Grid container spacing={16} alignItems="center" justify="center">
              <Grid key={1} item sm={12} xs={12}>
                <TextField label="name" id="name" fullWidth onChange={onProductChange} />
              </Grid>
              <Grid key={2} item sm={12} xs={12}>
                <TextField
                  label="description"
                  id="description"
                  fullWidth
                  onChange={onProductChange}
                />
              </Grid>
              <Grid key={3} item sm={12} xs={12}>
                <TextField label="recipe" id="recipe" fullWidth onChange={onProductChange} />
              </Grid>
              <Grid key={4} item sm={12} xs={12}>
                <TextField
                  type="number"
                  label="price"
                  id="price"
                  fullWidth
                  onChange={onProductChange}
                />
              </Grid>
              <Grid key={4} item sm={12} xs={12}>
                <Button variant="contained" color="primary" onClick={createProduct}>
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

export default withStyles(styles)(ProductForm);
