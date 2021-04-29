import firebase from '../lib/firebase'

export async function addTip(data, currentUser, addComplete) {
    
    try {
        await firebase
            .firestore()
            .collection('tips')
            .add({
                user: currentUser.uid,
                username: currentUser.displayName,
                userImage: currentUser?.providerData[0].photoURL ? currentUser?.providerData[0].photoURL : null,
                // city: data.city ? data?.city : '',
                title: data?.title,
                description: data?.description ? data?.description : '',
                image: data.image ? data?.image?.split(',').map((item) => item.trim()) : [],
                // audio: data?.audio ? data?.audio : '',
                link: data?.link ? data?.link : '',
                location: data?.location ? data?.location : '',
                tags: data.tags ? data?.tags?.split(',').map((item) => item.trim().toLowerCase()) : [],
                // createdAt: firebase.firestore.Timestamp.fromDate(new Date(Date.now())),
                createdAt: new Date(Date.now()).toString(),
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
        // .orderBy('createdAt', 'desc')
        .get()
    return res.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function getTipsByCategory(category) {
    const res = await firebase
        .firestore()
        .collection('tips')
        .where('tags', 'array-contains', category)
        // .orderBy('createdAt', 'desc')
        .limit(10)
        .get()
    const data = await res.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return {
        props: { data },
        revalidate: 10,
    }
}

export async function getTipsBySearch(searchTerm) {
    const res = await firebase
        .firestore()
        .collection('tips')
        .where('tags', 'array-contains', searchTerm)
        // .orderBy('createdAt', 'desc')
        .limit(10)
        .get()
    const data = res.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return data 
}

export async function getTip(id) {
    const doc = await firebase
        .firestore()
        .collection('tips')
        .doc(id)
        .get()
    return doc.data()  
}

export async function editTip(data, id, addComplete) {

    console.log('lisa', id, data)
    try {
        await firebase
            .firestore()
            .collection('tips')
            .doc(id)
            .update({
                // city: data?.city,
                title: data?.title,
                description: data?.description,
                image: data.image ? data?.image?.split(',').map((item) => item.trim()) : [],
                audio: data?.audio ? data?.audio : '',
                link: data?.link ? data?.link : '',
                location: data?.location ? data?.location : '',
                tags: data.tags ? data?.tags?.split(',').map((item) => item.trim().toLowerCase()) : [],
                // updatedAt: firebase.firestore.Timestamp.fromDate(new Date(Date.now())),
                updatedAt: (new Date(Date.now())).toString(),
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