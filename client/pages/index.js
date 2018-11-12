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
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import LoginComponent from '../auth/LoginComponent';

const styles = theme =>({
  container:{
    display:'flex',
    minHeight:'100vh',
    alignItems:'center',
    justifyContent:'center'
  },
});


class Index extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
          <LoginComponent/>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index)
