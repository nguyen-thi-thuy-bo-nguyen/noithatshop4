import React, { useEffect } from 'react';
import ItemsRoute from '../../../route/ItemsRoute';
import { SideBarMenu } from '../../components';


const MenuScreen = (props: any) => {
    return (
        <ItemsRoute>
            <SideBarMenu />
        </ItemsRoute>
    );
}

export default MenuScreen;