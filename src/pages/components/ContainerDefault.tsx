import React from 'react';
import Container from '@material-ui/core/Container';

const ContainerDefault = ({ children }: { children: React.ReactNode }) => {
    return <Container style={{ paddingTop: 100 }}>
        {() => children}
    </Container>

}
export default ContainerDefault;