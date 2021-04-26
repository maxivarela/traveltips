import { getTips } from '../../api'

export default async ({query: {id}}, res) => {

    const myData = await getTips()
    const data = myData.filter(item => item.id === id)

    if (data.length > 0) {
        res.status(200).json({ data })
    } else {
        res.status(404).json({message : 'Tip not found'})
    }

}
