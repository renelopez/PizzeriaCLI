import { withRouter } from 'next/router';
import React, { Component } from 'react';
import { compose } from 'recompose';

import { Mutation } from 'react-apollo';
import withLayout from '../components/Layout';
import withData from '../lib/apollo';
import { CREATE_PRODUCT } from '../queries/product';
import ProductForm from '../components/ProductForm';

class ProductDetails extends Component {
  onCompletedCreateQuery = data => {
    console.log('This is the completed data', data);
  };

  render() {
    console.log('These are the props', this.props);
    const { router } = this.props;
    if (router.query.id === 'create') {
      console.log('entre');
      return (
        <Mutation mutation={CREATE_PRODUCT} onCompleted={this.onCompletedCreateQuery}>
          {(createProductAction, { data, loading, error }) => (
            <ProductForm
              createProductAction={createProductAction}
              data={data}
              loading={loading}
              error={error}
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
