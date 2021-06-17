import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core';
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { ProductAddPage, ProductListPage } from '../pages/main';
import BillCreate from '../pages/main/bill/BillCreate';
import OrderCartList from '../pages/main/order-cart/OrderCartList';
import OrderCartDetail from '../pages/main/order_cart_detail/OrderCartDetail';
import PrivateRoute from './PrivateRoute';

const styles = (theme: Theme) => createStyles({
    root: {
        display: "flex",
    },
})
interface PropsRoute extends WithStyles<typeof styles> {
    children: React.ReactNode;
}
const ItemsRoute = ({ children, classes }: PropsRoute) => {

    return (
        <Router>
            <div className={classes.root}>
                {children}
                <Switch>
                    <Route exact path="/" component={OrderCartList} />
                    <PrivateRoute exact path="/product-list"  >
                        <ProductListPage />
                    </PrivateRoute>

                    <PrivateRoute exact path="/order/cart/detail"  >
                        <OrderCartDetail />
                    </PrivateRoute>
                    <PrivateRoute exact path="/order/cart/bill"  >
                        <BillCreate />
                    </PrivateRoute>
                    <PrivateRoute exact path="/product-add"  >
                        <ProductAddPage />
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>
    );
}

export default withStyles(styles)(ItemsRoute);