import React, { useState } from 'react'

var toggled = false;

export default function TextForm(props) {
    const averageReadingTimePerWordInMins = 0.005;

    const getWordCount = (text) => {
        return text.split(" ").length;
    }

    const handleUpClick = () => {
        let upperText = text.toUpperCase();
        setText(upperText);
    }

    const handleLowClick = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText);
        toggled = false;
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
        // toggled = false; 
    }

    const handleClearClick = () => {
        setText("");
    }

    const handleBase64EncodeDecodeToggle = (event) => {
        const base64ButtonClasses = ["btn btn-primary", "btn btn-success"]

        console.log(toggled);
        if (toggled) {
            // Convert base 64 to string
            let base64ToString = atob(text);

            setText(base64ToString);
            toggled = false;
        }

        else {
            // Convert string to base 64
            let stringToBase64 = btoa(text);

            setText(stringToBase64);
            toggled = true;
        }

        console.log(base64ButtonClasses[toggled]);
    }

    const [text, setText] = useState("Enter text here");
    // text = "something fun" // Invalid way
    // setText("Lol"); // Valid way

    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label htmlFor="myBox" className="form-label">Email address</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert To Lowercase</button>
                <button id="base64Button" className="btn btn-primary" onClick={handleBase64EncodeDecodeToggle}>Toggle Base64</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text Field</button>
            </div>
            <div className="container my-3">
                <h2>Text Summary</h2>
                <p>{getWordCount(text)} word and {text.length} characters</p>
                <p>Average reading time: {getWordCount(text) * averageReadingTimePerWordInMins}</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

