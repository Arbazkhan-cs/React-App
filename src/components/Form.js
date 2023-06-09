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
        let firstLetterCount;
        let newText = text.replace(/[\r\n]+/gm, " ");
        let strArr = newText.trim().split(". ");
        let str = "";
        let other;

        strArr.forEach((e, i, arr) => {
            firstLetterCount = e.charAt(0).toUpperCase();
            other = e.slice(1).toLowerCase();

            if ((arr.length - 1) === i) {
                str = str.concat(firstLetterCount, other);
            } else {
                str = str.concat(firstLetterCount, other, ". ");
            }
        })

        setText(str);
    }
    
    
    // ==================================================Read function==========================================
    let a=0;
    const read = (e) => {
        let voice = new SpeechSynthesisUtterance(text);
        if(a%2===0){
            speechSynthesis.speak(voice);
            e.target.innerHTML = "&#128263;";
        } else{
            speechSynthesis.cancel();
            e.target.innerHTML = "&#128266;";
        }
        a++;
    }

    // ==========================================text copy function ==============================================
    const copy = () => {
        if(navigator.clipboard) {
            navigator.clipboard.writeText(text);
        }
        else{
            alert(`Not possible to copy!!\n${text}`);
        }

        let icon = document.getElementById("myIcon");
        setTimeout(() => {
            icon.innerHTML = `<img style="height: 1.5rem;" src=${copyImg} alt="copy" />`
        }, 1000);
        icon.innerHTML = "copied";
    }


    // ===========================Remove Extra Spaces========================================
    const removeSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    // ==============================================Text Info==================================================
    let wordArray = text.split(/\s+/).filter(e=>e);
    let wordCount = wordArray.length;
    let letterCount = (wordArray.join("")).length;
    let sentenceCount = (text[text.trim().lastIndexOf("") - 1] === ".") ? (text.split(".").length) - 1 : text.split(".").length;

    if (text.trim() === "") {
        wordCount = 0;
        sentenceCount = 0;
    }


    // =============================================================================================================
    return (
        <div className='container' style={props.modeStyle}>
            {/*============================================ Form================================== */}
            <div className='row-1 position-relative'>

                <label htmlFor="myText" className="form-label fs-2">{props.title}</label>
                
                <div className='position-relative'>
                    <textarea className="form-control pe-5" id="myText" rows="6" placeholder="Enter Your Text Here" value={text} onChange={onHandleChange} style={{color:props.modeStyle.color, background:props.modeStyle.backgroundColor, resize:"none"}}></textarea>

                    <span className="position-absolute" id="myIcon" style={{
                        "top": "0.5rem",
                        "right": "1.5rem",
                        "cursor": "pointer",
                        "zIndex": "100",
                        "color":"blue"
                    }} onClick={copy}>
                        <img className="" style={{ "height": "1.5rem", "zIndex":"100" }} src={copyImg} alt="copy" />
                    </span>
                </div>
            </div>

            {/* ==============================================Buttons======================================= */}
            <div className='row-2 my-2 d-flex justify-content-between'>
                <div>
                    <button className={`btn btn-outline-${props.modeStyle.color === "black"?"dark":"primary"} my-1 me-2`} onClick={upperCase}>To Upper Case</button>
                    <button className={`btn btn-outline-${props.modeStyle.color === "black"?"dark":"primary"} my-1 me-2`} onClick={lowerCase}>To Lower Case</button>
                    <button className={`btn btn-outline-${props.modeStyle.color === "black"?"dark":"primary"} my-1 me-2`} onClick={removeSpace}>Remove Extra Spaces</button>
                    <button className={`btn btn-outline-${props.modeStyle.color === "black"?"dark":"primary"} my-1 me-2`} onClick={capitalise}>To Capitalise</button>
                </div>
                <div className='d-flex gap-2'>
                    <button className="btn btn-success my-1" onClick={read}>&#128266;</button>
                    <button className="btn btn-danger my-1" onClick={()=> setText("")}>Clear</button>
                </div>
            </div>

            <hr />
            
            {/* ============================================Text Info Card===================================== */}
            <div className="row-3 my-3">
                <div className="card">
                    <h3 className="card-header">Text Info</h3>
                    <div className="card-body border-light border" style={props.modeStyle}>
                        <div className="p">Sentences: <b>{sentenceCount}</b></div>
                        <div className="p">Words: <b>{wordCount}</b></div>
                        <div className="p">Characters: <b>{letterCount}</b></div>
                        <div className="p">Time Required To Read: <b>{wordCount / 200} minutes</b></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
