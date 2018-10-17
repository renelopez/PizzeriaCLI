/*
import React from 'react';
import Link from "next/link";
import Nav from '../components/Nav/Nav';
import posts from '../data/posts';
export default  () => (
  <div>
    <Nav />
    <hr />
      <ul>
        {posts.map((post,index) => (
          <li key={index}>
            <Link as={`/post/${index}`} href={{pathname:'/about',query:{id:index}}}>
              <a>{post.title}</a>
            </Link>
          </li>
          ))}
      </ul>
  </div>
)
*/
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';

import LoginComponent from '../auth/Login';

class Index extends React.Component {

  constructor(props){
    super(props);
  }

  render() {


    return (
      <LoginComponent/>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Index
