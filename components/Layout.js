import Footer from "./Footer"
import Navbar from "./Navbar"

import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
} from '@material-ui/core';

const Layout = ({children}) => {
    return ( 
        <>
            <Navbar />
                <Container maxWidth={'sm'} style={{margin: '40px auto'}}>
                    {children}
                </Container>
            <Footer />
        </>
    );
}

export default Layout;