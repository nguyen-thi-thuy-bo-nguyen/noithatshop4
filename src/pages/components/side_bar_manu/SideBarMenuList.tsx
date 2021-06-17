import React, { FC, memo } from 'react'
import { ListItem, ListItemIcon, ListItemText, Collapse, List } from '@material-ui/core';
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import StarBorder from "@material-ui/icons/StarBorder";
import { useStyles } from "./SideBarMenu.style";
import { NavLink } from 'react-router-dom';
import { CONSTANT } from '../../../asset';


interface SidebarMenuItemProps {
    title: string;
    child?: any
}

const SidebarMenuItem: FC<SidebarMenuItemProps> = ({ title, child }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    return <>
        <ListItem button onClick={handleClick}>
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={title} className={classes.text} />
            {open && !!child ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        {child ? child?.map(({ title, to }: any, i: number) => <Collapse in={open} timeout="auto" unmountOnExit key={i}>
            <List component="div" disablePadding>
                <NavLink to={to}>
                    <ListItem button className={classes.nested}>

                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText
                            primary={title}
                            className={classes.text}
                        />
                    </ListItem>
                </NavLink>

            </List>
        </Collapse>) : null}
    </>
}

const SidebarMenuList = () => {
    const classes = useStyles();

    return <List component="nav" className={classes.listRoot}>
        {CONSTANT.MENU_LIST.map((menu: any, i: number) => <SidebarMenuItem {...menu} key={i} />)}
    </List>
}

export default SidebarMenuList