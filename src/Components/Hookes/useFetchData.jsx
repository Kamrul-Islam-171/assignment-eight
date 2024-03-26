import { useEffect } from "react";
import { useState } from "react";

const useFetchData = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('./book.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    
    return {books};
};

export default useFetchData;