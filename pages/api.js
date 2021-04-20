import firebase from '../components/firebase'

export async function addTip(data, addComplete) {
    try {
        await firebase
            .firestore()
            .collection('tips')
            .add({
                userImage: data?.userImage,
                username: data?.username,
                title: data?.title,
                description: data?.description,
                image: data?.image,
                audio: data?.audio,
                link: data?.link,
                location: data?.location,
                tags: data?.tags?.split(',').map((item) => item.trim().toLowerCase()),
            })
        addComplete()

    } catch (error) {
        console.log(error)
    }
}