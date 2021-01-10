import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import ContainerDefault from '../../components/ContainerDefault';

const BillCreate = () => {
    return (
        <ContainerDefault>
            <Typography component="h4">
                Hóa đơn bán hàng

            </Typography>
            <Paper>
                <Typography component="h5">
                    Thông tin
                </Typography>
                <Typography component="h5"> Tên khách hàng :</Typography>
                <Typography component="h5"> Số điện thoại :</Typography>
                <Typography component="h5"> Địa chỉ :</Typography>


            </Paper>
        </ContainerDefault>
    );
}

export default BillCreate;