import firebase from '../../components/firebase'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(item => {
        return {
            params: { id: item.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { data }
    }
}


const Details = ({data: tip}) => {
    return ( 
        <>
            <h2>{tip.name}</h2>
            <h2>{tip.email}</h2>
        </>
    );
}

export default Details;