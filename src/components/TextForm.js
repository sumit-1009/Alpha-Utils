import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');
    
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLoClick = ()=>{
      console.log("Lowercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase", "success");
    }
    const handleClearClick = ()=>{
      console.log("Text Clear was clicked" + text);
      let newText = '';
      setText(newText);
      props.showAlert("Text Cleared", "success");
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");

        setText(event.target.value);
    }
    const handleCopy = ()=>{
      console.log("I am a copy");
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard", "success");
    }
    const handleExtraSpaces = ()=> {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }
    
    // setText("Enter your Text");
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textArea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode===`dark`?`grey`:`white`, color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textArea>
        </div>
        <button className="btn btn-primary mx-2"  onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2"  onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2"  onClick={handleClearClick}>Clear the Text</button>
        <button className="btn btn-primary mx-2"  onClick={handleCopy}>Copy the Text</button>
        <button className="btn btn-primary mx-2"  onClick={handleExtraSpaces}>Remove Extra Spaces</button>

      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
          <h2>Your text Summary</h2>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.08 * text.split(" ").length} minutes read</p>
          <h2>Priview</h2>
          <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
      </div>
    </>
  )
}
