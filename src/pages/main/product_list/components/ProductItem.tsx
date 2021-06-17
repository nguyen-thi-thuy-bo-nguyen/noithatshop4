import React, { FC, useState, useCallback, memo, useMemo } from 'react'
import { TableRow, TableCell, IconButton, Collapse, Typography, Box, Table, TableBody, TableContainer, TableHead, Paper } from '@material-ui/core'

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { url } from '../../../../asset/common/http_base';
interface Props { item: any }

const ProductListItem: FC<Props> = ({ item }) => {
    const [open, setOpen] = useState(false)

    const imageUrl = useMemo(() => (item?.images && item?.images?.length > 0) ? url + item?.images[0].link : null, [item])

    const onOpen = useCallback(() => setOpen(!open), [open])
    return <> <TableRow >
        <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={onOpen}>
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" onClick={() => { }}>
            {item.code ?? ""}
        </TableCell>
        <TableCell align="center">{item.product.name ?? ""}</TableCell>
        <TableCell align="center">{imageUrl ? <img src={imageUrl} style={{ width: "150px", height: "100px" }} /> : "Chưa có hình ảnh"}</TableCell>
        <TableCell align="center">{item.product.size ?? ""}</TableCell>
        <TableCell align="center">{item.colors ?? ""}</TableCell>
        <TableCell align="center">{item.product.productType.name}</TableCell>

        <TableCell align="center">{item.product.guarantee}</TableCell>

        <TableCell align="center">{item.product.material}</TableCell>
        <TableCell align="center">{item.status === "active" ? "Hiện" : "Ẩn"}</TableCell>

        {/* <TableCell align="center"><ButtonOrder status={item.status} /></TableCell> */}
    </TableRow>
        {/* <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box margin={1}>
                        <Typography component="h6">
                            Chi tiết sản phẩm
                        </Typography>
                        <Table size="small" aria-label="purchases">
                            <TableBody>
                                <TableContainer component={Paper}>
                                    <Table style={{ minWidth: 700 }} aria-label="spanning table">
                                        <TableHead>

                                            <TableRow>
                                                <TableCell>Tên sản phẩm</TableCell>
                                                <TableCell align="center">Màu sắc</TableCell>
                                                <TableCell align="center">Giá bán</TableCell>
                                                <TableCell align="center">Số lượng</TableCell>
                                                <TableCell align="center">Thành tiền</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {listItem.length !== 0 && listItem && listItem.map(itemDetail => (
                                                <>
                                                    {itemDetail && <TableRow>
                                                        <TableCell>{itemDetail.product.name}</TableCell>
                                                        <TableCell align="center">{itemDetail.product.productDetail.colors}</TableCell>
                                                        <TableCell align="center">{itemDetail.price}</TableCell>
                                                        <TableCell align="center">{itemDetail.number}</TableCell>
                                                        <TableCell align="center">{sumDetail(itemDetail.price, itemDetail.number)}</TableCell>
                                                    </TableRow>}
                                                </>

                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                            </TableBody>
                        </Table>
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow> */}
    </>
}

export default memo<Props>(ProductListItem)