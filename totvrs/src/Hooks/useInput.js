import {useState} from 'react'

export default function useInput(initialStage) {
    const [input, setInput] = useState(initialStage)

    const onChangeInput = (e) => {
        const { value, name } = e.target;
        setInput({...input, [name]: value})
    }

    return [input, onChangeInput]
}