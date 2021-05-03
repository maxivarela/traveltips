import {getTips} from '../../../lib/api'

export default async (req, res) =>  {

    const myData = await getTips()
    res.status(200).json({ data: myData })
    
}
