import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const OrderCartDetail = () => {
    return (
        <Container style={{ paddingTop: 100 }}>
            <Typography component="h4">Chi tiết đơn đặt hàng</Typography>
            <Typography component={Paper}>


            </Typography>


        </Container>
    );
}

export default OrderCartDetail;