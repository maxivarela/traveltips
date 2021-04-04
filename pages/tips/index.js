import TipsComponent from '../../components/TipsComponent'
import firebase from '../../components/firebase'

import {
    AppBar,
    Button,
    Container,
    IconButton,
    Toolbar,
    Typography,
} from '@material-ui/core';

export const getStaticProps = async () => {

    // const res = await fetch('https://jsonplaceholder.typicode.com/users')
    // const data = await res.json()

    // return {
    //   props: { tips: data}
    // }
    try {
        const querySnapshot = await firebase.firestore().collection('tips').get()
        const result = await querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        //  console.log('lisa', result)
        // const data = result.json()
        return {
            props: { tips: result }
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const Tips = ({ tips}) => {

    return ( 
        <>
            <h2>All Tips here</h2>
            <TipsComponent tips={tips} />
        </>
    );
}
 
export default Tips;