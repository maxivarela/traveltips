import CardComponent from '../../components/CardComponent';
import firebase from '../../components/firebase'

import { makeStyles } from '@material-ui/core/styles';
import {
    Container
} from '@material-ui/core';

//next will build a page for each of the items in this path array
export const getStaticPaths = async () => {
    const res = await firebase.firestore().collection('tips').get()
    const data = await res.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const paths = data.map(item => {
        return {
            params: {id: item.id}
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    try {
        const id = context.params.id

        const doc = await firebase.firestore().collection('tips').doc(id).get()
        const data = doc.data()

        return {
            props: { data }
        }
    } catch (err) {
        console.log(err)
    }
}

const Details = ({data}) => {
    return ( 
        <Container maxWidth='sm'>
            <CardComponent item={data} />
        </Container>
    );
}

export default Details;