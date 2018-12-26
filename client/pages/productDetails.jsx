import { withRouter } from 'next/router';
import React, { Component } from 'react';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import withLayout from '../components/Layout';

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

const CREATE_PRODUCT = gql`
  mutation CreateProduct($type: NewProduct!) {
    createProduct(type: $type) {
      name
      description
      recipe
      price
    }
  }
`;

class ProductDetails extends Component {
  state = {
    name: '',
    description: '',
    recipe: '',
    price: ''
  };

  onProductChange = ev => {
    this.setState({
      [ev.currentTarget.id]: ev.currentTarget.value
    });
  };

  createProduct = (mutateProductFunc, data) => {
    const { name, description, recipe, price } = this.state;
    mutateProductFunc({
      variables: {
        input: {
          name,
          description,
          recipe,
          price
        }
      }
    });
    console.log(`The data is:${data}`);
  };

  render() {
    const { classes } = this.props;
    return (
      <Mutation mutation={CREATE_PRODUCT}>
        {(mutateProduct, { data }) => (
          <div className={classes.rootDashboard}>
            <Grid container spacing={16} alignItems="center" justify="space-around">
              <Grid key={0} item sm={4} xs={12}>
                <Paper className={classes.gridItem}>
                  <Grid container spacing={16} alignItems="center" justify="center">
                    <Grid key={1} item sm={12} xs={12}>
                      <TextField label="name" id="name" fullWidth onChange={this.onProductChange} />
                    </Grid>
                    <Grid key={2} item sm={12} xs={12}>
                      <TextField
                        label="description"
                        id="description"
                        fullWidth
                        onChange={this.onProductChange}
                      />
                    </Grid>
                    <Grid key={3} item sm={12} xs={12}>
                      <TextField
                        label="recipe"
                        id="recipe"
                        fullWidth
                        onChange={this.onProductChange}
                      />
                    </Grid>
                    <Grid key={4} item sm={12} xs={12}>
                      <TextField
                        type="number"
                        label="price"
                        id="price"
                        fullWidth
                        onChange={this.onProductChange}
                      />
                    </Grid>
                    <Grid key={4} item sm={12} xs={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.createProduct(mutateProduct, data)}
                      >
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
        )}
      </Mutation>
    );
  }
}

export default compose(
  withStyles(styles),
  withLayout,
  withRouter
)(ProductDetails);
