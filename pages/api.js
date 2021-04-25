import firebase from '../firebase'

export async function addTip(data, addComplete) {
    
    try {
        await firebase
            .firestore()
            .collection('tips')
            .add({
                username: data.username ? data?.username : '',
                userImage: data?.userImage ? data?.userImage : '',
                city: data.city ? data?.city : '',
                title: data?.title,
                description: data?.description ? data?.description : '',
                image: data.image ? data?.image?.split(',').map((item) => item.trim()) : [],
                // audio: data?.audio ? data?.audio : '',
                link: data?.link ? data?.link : '',
                location: data?.location ? data?.location : '',
                tags: data.tags ? data?.tags?.split(',').map((item) => item.trim().toLowerCase()) : [],
                // createdAt: firebase.firestore.Timestamp.fromDate(new Date(Date.now())),
                // updatedAt: firebase.firestore.Timestamp.fromDate(new Date(Date.now()))
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

    const data = await res.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return {
        props: { data },
        revalidate: 10,
    }
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

export async function getTip(id) {
    const doc = await firebase
        .firestore()
        .collection('tips')
        .doc(id)
        .get()
    const data = doc.data()

    return {
        props: { id, data },
        revalidate: 10,
    }
}

export async function editTip(data, id, addComplete) {
    try {
        await firebase
            .firestore()
            .collection('tips')
            .doc(id)
            .update({
                username: data.username ? data?.username : '',
                userImage: data?.userImage ? data?.userImage : '',
                city: data?.city,
                title: data?.title,
                description: data?.description,
                image: data?.image ? data?.image : '',
                audio: data?.audio ? data?.audio : '',
                link: data?.link ? data?.link : '',
                location: data?.location ? data?.location : '',
                tags: data.tags ? data?.tags?.split(',').map((item) => item.trim().toLowerCase()) : [],
                updatedAt: firebase.firestore.Timestamp.fromDate(new Date(Date.now()))
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