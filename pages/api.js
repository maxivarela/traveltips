import firebase from '../components/firebase'

export async function addTip(data, addComplete) {
    try {
        await firebase
            .firestore()
            .collection('tips')
            .add({
                username: data.username ? data?.username : '',
                userImage: data?.userImage ? data?.userImage : '',
                city: data.city ? data?.city: '',
                title: data?.title,
                description: data?.description,
                image: data.image ? data?.image?.split(',').map((item) => item.trim()) : [],
                audio: data?.audio ? data?.audio : '',
                link: data?.link ? data?.link : '',
                location: data?.location ? data?.location : '',
                tags: data.tags ? data?.tags?.split(',').map((item) => item.trim().toLowerCase()) : [],
                createdAt: (new Date(Date.now())).toString(),
                updatedAt: (new Date(Date.now())).toString()
            })
        addComplete()

    } catch (error) {
        console.log(error)
    }
}

export async function editTip(data, id) {
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
                updatedAt: (new Date(Date.now())).toString()
            })

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