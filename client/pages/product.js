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

let id = 0;
function createData(name, description, recipe, price) {
  id += 1;
  return { id,name, description, recipe, price };
}

const rows = [
  createData('Pizza Genio', 'The pizza genio description', 'The pizza genio recipe', 24 ),
  createData('Pizza Vegetariana', 'The pizza veggie description', 'The pizza veggie recipe', 37),
  createData('Pizza Italiana', 'The pizza italiana description', 'The pizza italiana recipe', 24),
  createData('Pizza Alemana', 'The pizza alemana description', 'The pizza alemana recipe', 67),
  createData('Pizza Espanola', 'The pizza expanola description', 'The pizza espanola recipe', 49)
];


class ProductDashboard extends React.Component{
  render(){
    const { classes } = this.props;
    return(
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
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.recipe}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>
                    <Link as={`/product/${row.id}`} href={{pathname: '/productDetails', query: {id: row.id}}}>
                      <a><EditIcon /></a>
                    </Link>
                  </TableCell>
                  <TableCell>
                      <DeleteIcon />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default compose(
  withStyles(styles),
  withLayout
)(ProductDashboard)
