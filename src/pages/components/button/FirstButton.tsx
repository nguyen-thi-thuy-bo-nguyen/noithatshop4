import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core';
import Button from "@material-ui/core/Button"
const styles = (theme: Theme) => createStyles({
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
})
interface Props extends WithStyles<typeof styles> {
    title: string
    onClick: () => any

}
const FirstButton: React.FC<Props> = ({ classes, title, onClick }) => {
    return (
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onClick}
        >
            {title}
        </Button>
    );
}

export default withStyles(styles)(FirstButton);
