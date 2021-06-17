import React, { FC, useCallback, useEffect, useState } from 'react'
import {
    Container, Typography, TableContainer,
    Table, TableRow, TableHead, TableCell, TableBody, Paper
} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import TablePagination from '@material-ui/core/TablePagination';
import Pagination from '@material-ui/lab/Pagination';

import { ButtonDefault } from '../../components'
import { useDispatch, useSelector } from 'react-redux';
import { Creators } from '../../../redux/reducer/product/ProductReducer';
import ProductItem from './components/ProductItem';


interface Props { }

const useStyles = makeStyles((theme) => ({
    buttonContainer: {
        display: 'flex',
        marginBottom: "20px",
        justifyContent: "flex-end"
    },
    button: {
        width: "100px",
    }
}));

const ProductListPage: FC<Props> = () => {
    const history = useHistory();
    const classes = useStyles()
    const [page, setPage] = useState(0)
    const [rowPage, setRowPage] = useState(10)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Creators.getProductRequest())
    }, [])
    const list = useSelector((state: any) => state.product.productList ? state.product.productList : [])
    const onClick = useCallback(() => { history.push("/product-add"); }, [history])
    const renderList = useCallback(() => list.listDTO.map((item: any, i: number) => <ProductItem item={item} key={i} />), [list])
    const onChangePage = useCallback((event: any, index: any) => {
        dispatch(Creators.getProductRequest({ size: 10, page: index - 1 }))
    }, [])
    console.log(list);
    const handleChangeRowsPerPage = useCallback((event: any, value: any) => {
        dispatch(Creators.getProductRequest({ size: event.target.value }))
        setPage(0);
    }, [list]);

    return <Container style={{ paddingTop: 100 }}>
        <Typography component="div">
            <div className={classes.buttonContainer}>
                <ButtonDefault title="Thêm"
                    type='contained'
                    onClick={onClick}
                    className={classes.button} />
            </div>
            <TableContainer component={Paper} style={{ marginBottom: "50px" }}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Code</TableCell>
                            <TableCell align="center">Tên sản phẩm</TableCell>
                            <TableCell align="center">Hình ảnh</TableCell>
                            <TableCell align="center">Kích thước</TableCell>
                            <TableCell align="center">Màu sắc</TableCell>
                            <TableCell align="center">Loại sản phẩm</TableCell>
                            <TableCell align="center">Bảo hành</TableCell>
                            <TableCell align="center">Chất liệu</TableCell>
                            <TableCell align="center">Trạng thái</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list && list?.listDTO?.length > 0 && renderList()}
                    </TableBody>
                </Table>
            </TableContainer>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {!!list?.totalPage && <Pagination count={list?.totalPage} page={page} onChange={onChangePage} />
                }
            </div>


        </Typography>

    </Container>

}

export default ProductListPage