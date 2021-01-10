import React, { useCallback, useEffect, useState } from 'react';
import TextField from "@material-ui/core/TextField";
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import FirstBackground from '../../../asset/background/FirstBackground';
import FirstButton from '../../components/button/FirstButton';
import { Creators } from '../../../redux/reducer/user/AuthReducer';
import { Redirect } from 'react-router-dom';

const registerLogin = yup.object().shape({
    username: yup.string().required("Số điện thoại là bắt buộc"),
    password: yup.string().required("Mật khẩu là bắt buộc"),

})
interface AuthState {
    username: string;
    password: string;
}

const LoginScreen = () => {
    const dispatch = useDispatch()
    const { control, setValue, handleSubmit, errors, getValues } = useForm({
        resolver: yupResolver(registerLogin),
        defaultValues: { username: "", password: "" }
    });
    const onHandleClick = useCallback(({ username, password }: AuthState) => {
        dispatch(Creators.loginRequest(username, password));

    }, [])
    useEffect(() => {
        dispatch(Creators.login());
    }, [])

    return (
        <>


            <FirstBackground title={"Đăng nhập"}>
                <>
                    <Controller
                        as={TextField}
                        control={control}
                        name="username"
                        defaultValue=""
                        error={errors.username ? true : false}
                        margin="normal"
                        required
                        fullWidth
                        label="Số điện thoại"
                        placeholder="Nhập số điện thoại..."
                        autoComplete="on"
                        helperText={errors.username ? errors.username.message : ""}
                    />
                    <Controller
                        as={TextField}
                        control={control}
                        name="password"
                        defaultValue=""
                        error={errors.password ? true : false}
                        margin="normal"
                        required
                        fullWidth
                        label="Mật khẩu"
                        placeholder="Nhập mật khẩu..."
                        autoComplete="on"
                        helperText={errors.password ? errors.password.message : ""}
                        type="password"

                    />
                    <FirstButton title="Đăng nhập" onClick={handleSubmit(onHandleClick)} />

                </>
            </FirstBackground>

        </>

    );
}

export default LoginScreen;