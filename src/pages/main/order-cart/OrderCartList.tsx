import React, { useEffect, useState, useCallback } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import OrderCartItem from './component/OrderCartItem';
import { useSelector } from 'react-redux';

const OrderCartList = ({ }) => {
    // const list = useSelector((state: any) => state.order.orderList ? state.order.orderList : [])
    // console.log(list);
    // const [load, setLoad] = useState(false);
    // const onLoad = useCallback(() => { setLoad(!load) }, [load])
    // const Item = useCallback(() => {
    //     return list.length !== 0 && list && list.map((item: any, index: number) => <OrderCartItem item={item} listItem={item.orderCartDetails} key={index} onLoad={onLoad} />)

    // }, [list, onLoad])


    return (
        <Container style={{ paddingTop: 100 }}>
            <Typography component="div">
                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <TableCell>Code</TableCell>
                                <TableCell align="right">Khách hàng</TableCell>
                                <TableCell align="right">Số điện thoại</TableCell>
                                <TableCell align="right">Địa chỉ</TableCell>
                                <TableCell align="right">Tổng</TableCell>
                                <TableCell align="right">Trạng thái</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* <Item /> */}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Typography>
        </Container>

    );
}

export default OrderCartList;