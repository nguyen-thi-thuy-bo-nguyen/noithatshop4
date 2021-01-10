import React, { useEffect } from 'react';
import ItemsRoute from '../../../route/ItemsRoute';
import SideBarMenu from '../../components/side_bar_manu/SideBarMenu';
import { useDispatch } from 'react-redux';
import { Creators } from '../../../redux/reducer/user/OrderCarReducer';

const MenuScreen = (props: any) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Creators.orderRequest())
    }, [])
    return (
        <ItemsRoute>
            <SideBarMenu />
        </ItemsRoute>
    );
}

export default MenuScreen;