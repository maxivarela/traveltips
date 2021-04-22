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
                    <Container 
                        maxWidth={'lg'} 
                        style={{ padding: 0 }}
                        >
                        {children}
                    </Container>
                </CssBaseline>
            <Footer />
        </>
    );
}

export default Layout;