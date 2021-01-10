import React, { useState, useCallback } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import * as R from "ramda";
import { useHistory } from "react-router-dom";
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core';

import Statuses from '../../../../asset/common/Statuses';
import StatusesVi from '../../../../asset/common/StatusesVi';
import OrderCartServices from '../../../../services/api/OrderCartServices';
import { useDispatch } from 'react-redux';
import { Creators } from '../../../../redux/reducer/user/OrderCarReducer';

const styles = (theme: Theme) => createStyles({
    status: { fontSize: 12 },
    label: { fontSize: 10, textTransform: "none" }
})
interface Props extends WithStyles<typeof styles> {
    item: any,
    listItem: Array<any>,
    key: number;
    onLoad: Function
}

const OrderCartItem = ({ item, listItem, classes, key, onLoad }: Props) => {
    const [load, setLoad] = useState(false);
    const [open, setOpen] = useState(false)
    const [sumTotal, setTotal] = useState([]);
    const sumDetail = (a: number, b: number) => { return R.multiply(a, b) }
    const dispatch = useDispatch()
    const history = useHistory();
    const onClickRoute = useCallback((route) => {
        history.push(`/order/cart/${route}`)
    }, [history])
    const onUpdateStatus = useCallback((id: number, status: string) => {
        if (status.indexOf(Statuses.PREPARING) !== -1) {
            history.push("/order/cart/bill");
        } else if (status.indexOf(Statuses.TRANSPORT) === -1) {
            OrderCartServices.updateStatus(id, status);
            dispatch(Creators.orderRequest());
        }
        onLoad()
    }, [onLoad])

    const ButtonOrder = useCallback(({ status }: { status: string }) => {
        let title;
        let label;
        if (status.indexOf("unpaid") !== -1) {
            label = StatusesVi.UNPAID;

        }
        else { label = "" }

        if (status.indexOf("order") !== -1) {
            title = StatusesVi.ORDER
        }
        else if (status.indexOf("preparing") !== -1) {
            title = StatusesVi.PREPARING
        }
        else if (status.indexOf("createbill") !== -1) {
            title = StatusesVi.CREATEBill
        }
        else if (status.indexOf("transporting") !== -1) {
            title = StatusesVi.TRANSPORTING;
        }
        else if (status.indexOf("complete") !== -1) {
            title = StatusesVi.COMPLETE
        }

        return <>
            <Button variant="contained" className={classes.status} onClick={() => onUpdateStatus(item.id, status)}>
                {title}
                {label !== "" && <Typography component="h5" className={classes.label}>({label})</Typography>}
            </Button>

        </>
    }, [])





    return (
        <React.Fragment key={key} >
            {item && <>

                <TableRow >
                    <TableCell>
                        <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row" onClick={() => onClickRoute("detail")}>
                        {item.code ?? ""}
                    </TableCell>
                    <TableCell align="right">{item.nameCustomer !== "" ? item.nameCustomer : item.customer.name}</TableCell>
                    <TableCell align="right">{item.phoneCustomer !== "" ? item.phoneCustomer : item.customer.username}</TableCell>
                    <TableCell align="right">{item.adddress !== "" ? item.adddress : item.customer.adddress}</TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"><ButtonOrder status={item.status} /></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box margin={1}>
                                <Typography component="h6">
                                    Chi tiết đơn hàng
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableBody>
                                        {/*  */}
                                        <TableContainer component={Paper}>
                                            <Table style={{ minWidth: 700 }} aria-label="spanning table">
                                                <TableHead>

                                                    <TableRow>
                                                        <TableCell>Tên sản phẩm</TableCell>
                                                        <TableCell align="right">Màu sắc</TableCell>
                                                        <TableCell align="right">Giá bán</TableCell>
                                                        <TableCell align="right">Số lượng</TableCell>
                                                        <TableCell align="right">Thành tiền</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {listItem.length !== 0 && listItem && listItem.map(itemDetail => (
                                                        <>
                                                            {itemDetail && <TableRow>
                                                                <TableCell>{itemDetail.product.name}</TableCell>
                                                                <TableCell align="right">{itemDetail.product.productDetail.colors}</TableCell>
                                                                <TableCell align="right">{itemDetail.price}</TableCell>
                                                                <TableCell align="right">{itemDetail.number}</TableCell>
                                                                <TableCell align="right">{sumDetail(itemDetail.price, itemDetail.number)}</TableCell>
                                                            </TableRow>}
                                                        </>

                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>

                                        {/*  */}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </>
            }
        </React.Fragment>
    );
}

export default withStyles(styles)(OrderCartItem);