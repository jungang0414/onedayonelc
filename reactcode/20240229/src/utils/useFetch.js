import React, { useState } from "react";

export function FetchAPI() {
    //url
    const url = "https://api.datamuse.com/words";
    //搜尋到的資料
    const [data, setData] = useState([]);
    //載入判斷
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async (word) => {
        setIsLoading(true);
        try {
            fetch(`${url}?rel_syn=${word}`)
                .then(response => response.json())
                .then((data) => setData(data))
        }
        catch (err) {
            console.log(err)
        }
        finally {
            setIsLoading(false)
        }
    }
    return { data, isLoading, fetchData };
}