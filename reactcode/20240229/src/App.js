import React, { useState } from "react";
import { FetchAPI } from "./utils/useFetch";

const App = () => {
    //宣告要儲存文字的變數
    const [word, setWord] = useState("");
    const { isLoading, data, fetchData } = FetchAPI();
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData(word)
    };

    return (
        <div className="App">
            <h1>同義字</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    placeholder="輸入文字"
                />
                <button type="submit">搜尋</button>
            </form>
            {isLoading ? (
                <p>isLoading.....</p>
            ) : (
                data.map((word) => (
                    <ul key={word}>
                        <li>{word.word}</li>
                    </ul>
                ))
            )}
        </div>
    );
};

export default App;