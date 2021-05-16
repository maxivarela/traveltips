import Footer from "./Footer"
import Navbar from "./Navbar"

import {
    Container,
} from '@material-ui/core';

const Layout = ({children}) => {
    return ( 
        <>
            <Navbar />
                <Container 
                    maxWidth={'lg'} 
                    >
                    {children}
                </Container>
            <Footer />
        </>
    );
}

export default Layout;