import React from 'react';
import PropTypes from 'prop-types';
import Link from "next/link";
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {compose} from "recompose";
import withLayout from "../components/Layout";
import gql from "graphql-tag";
import {Query} from "react-apollo";
import withData from '../lib/apollo';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

// let id = 0;
// function createData(name, description, recipe, price) {
//   id += 1;
//   return { id,name, description, recipe, price };
// }
//
// const rows = [
//   createData('Pizza Genio', 'The pizza genio description', 'The pizza genio recipe', 24 ),
//   createData('Pizza Vegetariana', 'The pizza veggie description', 'The pizza veggie recipe', 37),
//   createData('Pizza Italiana', 'The pizza italiana description', 'The pizza italiana recipe', 24),
//   createData('Pizza Alemana', 'The pizza alemana description', 'The pizza alemana recipe', 67),
//   createData('Pizza Espanola', 'The pizza expanola description', 'The pizza espanola recipe', 49)
// ];

const productsQuery =  gql`
  {
    getAllProducts{
      id,
      name,
      description
    }
  }
`;


class ProductDashboard extends React.Component{
  render(){
    const { classes } = this.props;
    return(
      <Query query={productsQuery}>
        {({ data }) => {
          return (
                  <Paper className={classes.root}>
                  <Table className={classes.table}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Product name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Recipe</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map(row => {
                        return (
                          <TableRow key={data.id}>
                            <TableCell component="th" scope="row">
                              {data.name}
                            </TableCell>
                            <TableCell>{data.description}</TableCell>
                            <TableCell>{data.recipe}</TableCell>
                            <TableCell>{data.price}</TableCell>
                            <TableCell>
                              <Link as={`/product/${data.id}`} href={{pathname: '/productDetails', query: {id: data.id}}}>
                                <a><EditIcon/></a>
                              </Link>
                            </TableCell>
                            <TableCell>
                              <DeleteIcon/>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </Paper>
            )}}
          </Query>
    )
  }
}

export default compose(
  withData,
  withStyles(styles),
  withLayout
)(ProductDashboard)
