import axios from "axios";
import { useEffect, useState } from "react"

const useFetchCategories = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState("");

    var config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://backend.getlinked.ai/hackathon/categories-list',
        headers: { 
            'Content-Type': 'application/json'
        },
        data: ''
    };
    
    useEffect(() => {
        async function fetchdata() {
            try {
                const response = await axios(config);
                setCategories(response.data);
            } catch(err) {
                setError(err?.message);
            }
        }
        fetchdata();
    }, []);

    return { categories, error }
}

export default useFetchCategories