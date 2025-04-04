import React, { useState } from "react"


export default function TextForm(props)
{
    const handleUpClick =()=>{
        // console.log("Uppercase was clicked"+text)
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success")
    }

    const handleLowClick =()=>{
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success")
    }
    const handleClearClick=()=>{
        let newText='';
        setText(newText)
        props.showAlert("Cleared the text","success")
    }
    const handleCopy=()=>{
        var text= document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges()
        props.showAlert("Text Copied!! ","success")
    }

    const handleExtraSpaces=()=>{
        let newText =text.split(/[ ]+/)
        setText(newText.join("."))
        props.showAlert("Extra spaces removed!!!","success")
    }

    const handleOnChange =(event)=>{
        // console.log("OnChange")
        setText(event.target.value)
    }

    

    const[text,setText]=useState(' ') // by default
    // text= "new text"; //wrong way to change he state
    // setText=("new text"); //correct way to change the state
    return(
        <div>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 className="mb-2">{props.heading}</h1>
            <div className="mb-3">            
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{
                            backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black',}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary" onClick={handleClearClick}>Clear</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        </div>
        <div className="container my-3" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
            <h1>Your Text Summary</h1>
            <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</b></p>
            <p>{0.008*text.split(" ").length} Minutes Read</p>
            <h1>Preview</h1>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </div>
    )
}