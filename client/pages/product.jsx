import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { compose } from 'recompose';
import { Query } from 'react-apollo';
import withData from '../lib/apollo';
import withLayout from '../components/Layout';
import { GET_ALL_PRODUCTS } from '../queries/product';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
});

function ProductDashboard(props) {
  const { classes } = props;
  return (
    <Query query={GET_ALL_PRODUCTS}>
      {({ data }) => {
        console.log('The data', data.getAllProducts);
        return (
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Product name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Recipe</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell />
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {data.getAllProducts.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell>{row.recipe}</TableCell>
                    <TableCell>{row.price}</TableCell>
                    <TableCell>
                      <Link
                        as={`/product/${row.id}`}
                        href={{ pathname: '/productDetails', query: { id: row.id } }}
                      >
                        <EditIcon />
                      </Link>
                    </TableCell>
                    <TableCell>
                      <DeleteIcon />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        );
      }}
    </Query>
  );
}

ProductDashboard.propTypes = {
  classes: PropTypes.shape({ root: {}, table: {} }).isRequired
};

export default compose(
  withData,
  withStyles(styles),
  withLayout
)(ProductDashboard);
