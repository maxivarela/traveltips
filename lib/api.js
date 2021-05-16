import firebase, { postToJSON} from './firebase'

export async function addTip(data, currentUser, addComplete) {
    
    try {
        await firebase
            .firestore()
            .collection('tips')
            .add({
                user: currentUser.uid,
                username: currentUser.displayName,
                userImage: currentUser?.providerData[0].photoURL ? currentUser?.providerData[0].photoURL : null,
                title: data?.title,
                description: data?.description ? data?.description : '',
                image: data.image ? data?.image?.split(',').map((item) => item.trim()) : [],
                link: data?.link ? data?.link : '',
                location: data?.location ? data?.location : '',
                coordinates: data?.latitude && data?.longitude && new firebase.firestore.GeoPoint(Number(data?.latitude), Number(data?.longitude)),
                tags: data.tags ? data?.tags?.split(',').map((item) => item.trim().toLowerCase()) : [],
                createdAt: firebase.firestore.Timestamp.fromDate(new Date(Date.now())),
                updatedAt: firebase.firestore.Timestamp.fromDate(new Date(Date.now())),
            })
        addComplete()

    } catch (error) {
        console.log(error)
    }
}

export async function getTips() {
    const res = await firebase
        .firestore()
        .collection('tips')
        .orderBy('createdAt', 'desc')
        .get()
    return res.docs.map(doc => {
        // console.log('lisa', doc.data())
        return (
            (postToJSON(doc))
        )
    })       
}

export async function getUserTips(id) {

    const res = await firebase
        .firestore()
        .collection('tips')
        .where('user', '==', id)
        .orderBy('createdAt', 'desc')
        .get()
    return res.docs.map(doc => (postToJSON(doc)))

}

export async function getTipsByCategory(category) {
    const res = await firebase
        .firestore()
        .collection('tips')
        .where('tags', 'array-contains', category)
        .orderBy('createdAt', 'desc')
        .limit(10)
        .get()
    const data = res.docs.map(doc => (postToJSON(doc)));
    return {
        props: { data },
        revalidate: 5000,
    }
}

export async function getTipsBySearch(searchTerm) {
    const res = await firebase
        .firestore()
        .collection('tips')
        .where('tags', 'array-contains', searchTerm)
        .orderBy('createdAt', 'desc')
        .limit(10)
        .get()
    return res.docs.map(doc => (postToJSON(doc)))
}

//used for editing the tip
export async function getTip(id) {
    const doc = await firebase
        .firestore()
        .collection('tips')
        .doc(id)
        .get()
    return doc 
}

export async function editTip(data, id, addComplete) {

    try {
        await firebase
            .firestore()
            .collection('tips')
            .doc(id)
            .update({
                title: data?.title,
                description: data?.description,
                image: data.image ? data?.image?.split(',').map((item) => item.trim()) : [],
                audio: data?.audio ? data?.audio : '',
                link: data?.link ? data?.link : '',
                location: data?.location ? data?.location : '',
                coordinates: data?.latitude && data?.longitude && new firebase.firestore.GeoPoint(Number(data?.latitude), Number(data?.longitude)),
                tags: data.tags ? data?.tags?.split(',').map((item) => item.trim().toLowerCase()) : [],
                updatedAt: firebase.firestore.Timestamp.fromDate(new Date(Date.now())),         
            })
        addComplete()

    } catch (error) {
        console.log(error)
    }
}

export async function deleteTip(id) {
    try {
        await firebase
            .firestore()
            .collection(`tips`)
            .doc(id)
            .delete()
    } catch (err) {
        console.log(err)
    }

}