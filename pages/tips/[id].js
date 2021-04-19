import firebase from '../../components/firebase'
import Image from 'next/image'

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


//EXECUTED ON SERVER
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
console.log(data)
    return ( 
        <>
            {/* <img src={data?.image} alt=''/> */}
            {/* <Image src={data?.userImage} width={40} height={40} alt=''/> */}

            <p>{data?.username}</p>
            <p>{data?.title}</p>
            <p>{data?.description}</p>

        </>
    );
}

export default Details;