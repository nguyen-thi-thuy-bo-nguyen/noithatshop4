import React, { FC, memo, useCallback, useEffect } from 'react'
import { Button, Container, FormControl, Grid, Input, InputLabel, Select, TextField, Typography } from '@material-ui/core'
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Creators } from '../../../redux/reducer/product/ProductReducer';

interface Props { }

const addResolver = yup.object().shape({


})

const ProductAddPage: FC<Props> = () => {
    const { control, handleSubmit, errors, watch } = useForm({
        resolver: yupResolver(addResolver),
        defaultValues: {
            // txtCode: "",
            txtName: "",
            txtSize: "",
            txtColor: "",
            txtMaterial: "",
            txtSource: "",
            txtDescript: "",
            txtProductPrice: "",
            txtRealPrice: "",
            txtGuarantee: "",
            txtImage: "",
            txtType: ""
        }
    });
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Creators.getProductTypeRequest())
    }, [])
    const listType = useSelector((state: any) => state.product.typeList ? state.product.typeList : [])
    console.log(listType)
    const onSubmit = useCallback((data) => {
        const item = {
            name: data.txtName,
            size: data.txtSize,
            materia: data.txtGuarantee,
            source: data.txtMaterial,
            guarantee: data.txtGuarantee,
            productDetail: [{
                colors: data.txtColor,
                numberStock: 200,
                realPrice: data.txtRealPrice,
                productPrice: data.txtProductPrice
            }],
            productType: data.txtType
        }
        console.log("data", item)
    }, [])
    return <Container style={{ paddingTop: 100 }}>
        <Typography component="div" style={{ height: "60vh" }}>
            <Typography variant="h4" gutterBottom style={{ textAlign: "center" }}>
                Thêm sản phẩm
            </Typography>
            <Grid
                container
                justify="center"
                spacing={6}
                direction="row"
                style={{
                    // height: "80vh",
                }}
            >
                <Grid item md={6}>
                    {/* <Controller
                        control={control}
                        name="txtCode"
                        render={({ onChange, value }) => <TextField
                            label="Mã sản phẩm"
                            fullWidth
                            onChange={onChange}
                            value={value}
                        />}
                    /> */}
                    <Controller
                        control={control}
                        name="txtName"
                        render={({ onChange, value }) => <TextField
                            label="Tên sản phẩm"
                            fullWidth
                            onChange={onChange}
                            value={value}
                        />}
                    />
                    <Controller
                        control={control}
                        name="txtSize"
                        render={({ onChange, value }) => <TextField
                            label="Kích thước sản phẩm"
                            fullWidth
                            onChange={onChange}
                            value={value}
                        />}
                    />
                    <Controller
                        control={control}
                        name="txtColor"
                        render={({ onChange, value }) => <TextField
                            label="Màu sắc"
                            fullWidth
                            onChange={onChange}
                            value={value}
                        />}
                    />
                    <Controller
                        control={control}
                        name="txtMaterial"
                        render={({ onChange, value }) => <TextField
                            label="Chất liệu"
                            fullWidth
                            onChange={onChange}
                            value={value}
                        />}
                    />
                    <Controller
                        control={control}
                        name="txtSource"
                        render={({ onChange, value }) => <TextField
                            label="Xuất xứ"
                            fullWidth
                            onChange={onChange}
                            value={value}
                        />}
                    />
                    <Controller
                        control={control}
                        name="txtDescript"
                        render={({ onChange, value }) => <TextField
                            label="Mô tả"
                            fullWidth
                            onChange={onChange}
                            value={value}
                            multiline
                            rows={4}
                        />}
                    />

                </Grid>
                <Grid item md={6}>
                    <Controller
                        control={control}
                        name="txtProductPrice"
                        render={({ onChange, value }) => <TextField
                            label="Giá sản phẩm"
                            fullWidth
                            onChange={onChange}
                            value={value}

                        />}
                    />
                    <Controller
                        control={control}
                        name="txtRealPrice"
                        render={({ onChange, value }) => <TextField
                            label="Giá bán"
                            fullWidth
                            onChange={onChange}
                            value={value}

                        />}
                    />


                    <FormControl fullWidth>
                        <InputLabel htmlFor="age-native-simple">Bảo hành </InputLabel>
                        <Controller
                            control={control}
                            name="txtGuarantee"
                            render={({ onChange, value }) => <Select
                                native
                                value={value}
                                onChange={onChange}
                                inputProps={{
                                    name: "age",
                                    id: "age-native-simple",
                                }}
                                fullWidth
                            >
                                <option value={6}>6 tháng</option>
                                <option value={12}>12 tháng </option>
                                <option value={18}>18 tháng </option>
                            </Select>}
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="age-native-simple">Loại sản phẩm </InputLabel>
                        <Controller
                            control={control}
                            name="txtType"
                            render={({ onChange, value }) => <Select
                                native
                                value={value}
                                onChange={onChange}
                                inputProps={{
                                    name: "age",
                                    id: "age-native-simple",
                                }}
                                fullWidth
                            >
                                {listType ? listType?.map((type: any) =>
                                    <option value={type}>{type?.name}</option>) :
                                    <option value={""}></option>}

                            </Select>}
                        />
                    </FormControl>

                    {/*
                    <AutoCompleteSelect
                        name="txtRoom"
                        label="Loại phòng"
                        list={[]}
                        message={"error"}
                    // value={state.room.value}
                    // onChange={onChange.onChangeRoom}
                    /> */}
                    <InputLabel> Hình ảnh </InputLabel>
                    <Controller
                        control={control}
                        name="txtImage"
                        render={({ onChange, value }) => <Input
                            type="file"
                            fullWidth
                            defaultValue=""
                            // inputProps={{ multiple: true }}
                            value={value}
                            onChange={onChange}
                        />}
                    />

                    <FormControl fullWidth>
                        <InputLabel htmlFor="age-native-simple">Trạng thái </InputLabel>
                        <Controller
                            control={control}
                            name="txtGuarantee"
                            render={({ onChange, value }) => <Select
                                native
                                value={value}
                                onChange={onChange}
                                inputProps={{
                                    name: "age",
                                    id: "age-native-simple",
                                }}
                                fullWidth
                            >
                                <option value={"active"}>Hiện </option>
                                <option value={"stop"}>Ẩn</option>
                            </Select>}
                        />
                    </FormControl>
                </Grid>
            </Grid>
            <div style={{ display: 'flex', justifyContent: "flex-end", marginTop: "20px", width: "80%", margin: "auto" }}>
                <Button variant="contained" color="primary" onClick={handleSubmit(onSubmit)} >
                    Thêm
                </Button>
            </div>

        </Typography>
    </Container>

}

export default memo<Props>(ProductAddPage)