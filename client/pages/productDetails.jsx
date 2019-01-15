import { withRouter } from 'next/router';
import React, { Component } from 'react';
import { compose } from 'recompose';

import { Mutation } from 'react-apollo';
import withLayout from '../components/Layout';
import withData from '../lib/apollo';
import { CREATE_PRODUCT } from '../queries/product';
import ProductForm from '../components/ProductForm';

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

  onCompletedCreateQuery = data => {
    console.log('This is the data', data);
  };

  createProduct = (mutateProductFunc, data) => {
    console.log('Aqui ando');
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
    console.log('These are the props', this.props);
    const { router } = this.props;
    if (router.query.id === 'create') {
      console.log('entre');
      return (
        <Mutation mutation={CREATE_PRODUCT} onCompleted={this.onCompletedCreateQuery}>
          {(mutateProduct, { data }) => (
            <ProductForm
              onProductChange={this.onProductChange}
              createProduct={this.createProduct(mutateProduct, data)}
            />
          )}
        </Mutation>
      );
    }
    return <div>Here begins the edition process....</div>;
  }
}

export default compose(
  withData,
  withLayout,
  withRouter
)(ProductDetails);
