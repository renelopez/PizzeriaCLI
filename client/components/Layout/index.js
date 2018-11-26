import React from 'react';
import Header from '../Header';

function withLayout(WrappedComponent){
  return class extends React.Component {
    render() {
      return(
          <div>
            <Header/>
            <WrappedComponent {...this.props}/>
          </div>
      )
    }
  }
}

export default withLayout;
