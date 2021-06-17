import React, { memo } from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core';
import Button from "@material-ui/core/Button"
const styles = (theme: Theme) => createStyles({
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
})
type Variant = "contained" | "outlined"
interface Props extends WithStyles<typeof styles> {
    title: string
    onClick?: () => any
    type: Variant;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    className?: any
}
const ButtonDefault: React.FC<Props> = ({ className, title, onClick, type, startIcon, endIcon }) => {
    return (
        <Button
            type="submit"
            fullWidth
            variant={type}
            color="primary"
            className={className}
            onClick={onClick}
            startIcon={startIcon}
            endIcon={endIcon}
        >
            {title}
        </Button>
    );
}

export default withStyles(styles)(memo<Props>(ButtonDefault));
