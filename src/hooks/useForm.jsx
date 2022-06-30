import { useState } from "react"

export default function useForm() {
    const [data, setData] = useState(null);
    const [response, setResponse] = useState(null);

    const handleData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const sendData = e => {
        e.preventDefault();
        setResponse(data)
    };

    return [response, sendData, handleData];
};