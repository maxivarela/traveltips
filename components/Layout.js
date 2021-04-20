import Footer from "./Footer"
import Navbar from "./Navbar"

import { makeStyles } from '@material-ui/core/styles';
import {
    CssBaseline,
    Container,
} from '@material-ui/core';

const Layout = ({children}) => {
    return ( 
        <>
            <Navbar />
                <CssBaseline>
                    <Container maxWidth={'lg'} style={{ margin: '40px auto', backgroundColor: "efefef" }}>
                        {children}
                    </Container>
                </CssBaseline>
            <Footer />
        </>
    );
}

export default Layout;