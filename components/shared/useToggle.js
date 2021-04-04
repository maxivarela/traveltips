import { useState } from 'react'

const useToggle = (defaultValue = false) => {
    const [state, setState] = useState(defaultValue)
    const flipState = () => {
        setState(!state)
    }
    return [state, flipState]
}

export default useToggle
