import React, { useState } from 'react'
import copyImg from "../copy.png"


export default function Form(props) {
    const [text, setText] = useState("");

    // ===============================================Adding text to the input field==============================
    const onHandleChange = (e) => {
        // console.log("onChange")
        setText(e.target.value);
    }

    // =================================================text Upper case============================================
    const upperCase = () => {
        // console.log("upperCase clicked");
        let textValue = text.trim().toUpperCase();
        setText(textValue);
    }

    // ================================================text Lower Case===========================================
    const lowerCase = () => {
        // console.log("lowerCase clicked");
        let textValue = text.trim().toLowerCase();
        setText(textValue);
    }


    // ==========================================Text capitalise function========================================
    const capitalise = () => {
        // console.log("capitalise clicked");
        let firstLetter;
        let newText = text.replace(/[\r\n]+/gm, " ");
        let strArr = newText.trim().split(". ");
        let str = "";
        let other;

        strArr.forEach((e, i, arr) => {
            firstLetter = e.charAt(0).toUpperCase();
            other = e.slice(1).toLowerCase();

            if ((arr.length - 1) === i) {
                str = str.concat(firstLetter, other);
            } else {
                str = str.concat(firstLetter, other, ". ");
            }
        })

        setText(str);
    }
    
    
    // ==================================================Read function==========================================
    const read = () => {
        let voice = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(voice);
    }

    // ==========================================text copy function ==============================================
    const copy = () => {
        if(navigator.clipboard) {
            navigator.clipboard.writeText(text);
        }
        else{
            alert(`Not possible to copy in mobile phones!!\n${text}`);
        }

        let icon = document.getElementById("myIcon");
        setTimeout(() => {
            icon.innerHTML = `<img style="height: 1.5rem;" src=${copyImg} alt="copy" />`
        }, 1000);
        icon.innerHTML = "copied";
    }


    const removeSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    // ==============================================Text Info==================================================
    let letter = (text.split(" ").filter(e=>e!=" ").join("")).length;
    let word = text.trim().split(" ").length;
    let sentence = (text[text.trim().lastIndexOf("") - 1] === ".") ? (text.split(".").length) - 1 : text.split(".").length;
    if (text.trim() === "") {
        word = 0;
        sentence = 0;
    }



    let btnColor = "dark";
    if(props.modeStyle.backgroundColor === "#0d3200"){
      btnColor = "success";
    } else if(props.modeStyle.backgroundColor === "rgb(77, 2, 2)"){
      btnColor = "danger";
    } else if(props.modeStyle.backgroundColor === "#01001f"){
      btnColor = "info";
    }

    // =============================================================================================================
    return (
        <div className='container' style={props.modeStyle}>
            {/*============================================ Form================================== */}
            <div className='row-1 position-relative'>
                <label htmlFor="myText" className="form-label fs-1">Text App</label>
                <textarea className="form-control mb-2 pe-5" id="myText" rows="6" value={text} onChange={onHandleChange} style={props.modeStyle}> </textarea>

                <span className="position-absolute" id="myIcon" style={{
                    "top": "4.5rem",
                    "right": "1.5rem",
                    "cursor": "pointer",
                    "zIndex": "100",
                    "color":"blue"
                }} onClick={copy}>
                    <img className="" style={{ "height": "1.5rem" }} src={copyImg} alt="copy" />
                </span>
            </div>

            {/* ==============================================Buttons======================================= */}
            <div className='row-2 my-2 d-flex justify-content-between'>
                <div>
                    <button className={`btn btn-outline-${btnColor} my-1 me-2`} onClick={upperCase}>To Upper Case</button>
                    <button className={`btn btn-outline-${btnColor} my-1 me-2`} onClick={lowerCase}>To Lower Case</button>
                    <button className={`btn btn-outline-${btnColor} my-1 me-2`} onClick={removeSpace}>Remove Extra Spaces</button>
                    <button className={`btn btn-outline-${btnColor} my-1 me-2`} onClick={capitalise}>To Capitalise</button>
                </div>
                <div className='d-flex gap-2'>
                    <button className="btn btn-success my-1" onClick={read}>Read &#128266;</button>
                    <button className="btn btn-danger my-1" onClick={()=> setText("")}>Clear</button>
                </div>
            </div>

            <hr />
            
            {/* ============================================Text Info Card===================================== */}
            <div className="row-3 my-3">
                <div className="card">
                    <h3 className="card-header">Text Info</h3>
                    <div className="card-body" style={props.modeStyle}>
                        <div className="p">Sentences: <b>{sentence}</b></div>
                        <div className="p">Word: <b>{word}</b></div>
                        <div className="p">Letters: <b>{letter}</b></div>
                        <div className="p">Time Required To Read: <b>{word / 200} minutes</b></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
