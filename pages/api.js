import firebase from '../components/firebase'

export async function addTip(data, addComplete) {
    try {
        await firebase
            .firestore()
            .collection('tips')
            .add({
                username: data.username ? data?.username : '',
                userImage: data?.userImage ? data?.userImage : '',
                title: data?.title,
                description: data?.description,
                image: data?.image ? data?.image : '',
                audio: data?.audio ? data?.audio : '',
                link: data?.link ? data?.link : '',
                location: data?.location ? data?.location : '',
                tags: data.tags ? data?.tags?.split(',').map((item) => item.trim().toLowerCase()) : [],
            })
        addComplete()

    } catch (error) {
        console.log(error)
    }
}