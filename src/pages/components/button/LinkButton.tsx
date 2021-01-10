import React from 'react';
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

interface Props {
    title: string;
    link: any
}
const LinkButton: React.FC<Props> = ({ title, link }) => {
    return (
        <Grid container>
            <Grid item>
                {title}
                <Link variant="body2" href={link}>
                    {"tại đây"}
                </Link>
            </Grid>
        </Grid>
    );
}

export default LinkButton;