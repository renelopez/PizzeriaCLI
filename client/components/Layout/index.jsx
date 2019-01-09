import React from 'react';
import Header from '../Header';

function withLayout(WrappedComponent) {
  return function Layout(props) {
    return (
      <div>
        <Header />
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withLayout;
