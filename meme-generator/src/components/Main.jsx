import React, { useEffect, useState } from 'react';
//import memesData from "../memesData.js"

export default function Main() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }

        getMemes();

    }, [])

    console.log(allMemes);

    function getMemeImage() {

        const randomNumber = Math.floor(Math.random() * allMemes.length);

        const url = allMemes[randomNumber].url;

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }

    function handleChange(event) {

        const { name, value, type, checked } = event.target;

        setMeme(prevMemeData => {
            return {
                ...prevMemeData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {

        event.preventDefault()
        console.log(meme);
    }

    return (
        <main>

            <form onSubmit={handleSubmit} className="form">

                <input
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                />

                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                />

                <button
                    className="form-button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 
                </button>

            </form>

            <div className="meme">
                <img src={meme.randomImage} className="meme-image" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>

        </main>
    );
}
