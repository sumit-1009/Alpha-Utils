import React, { useState } from 'react'

export default function TextForm(props) {

  const [text, setText] = useState('');
    
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLoClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase", "success");
    }

    const handleOnChange = (event)=> {
        setText(event.target.value);
    }
    const handleCopy = ()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Copied to clipboard", "success");
    }
    
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 className='mb-2'>{props.heading}</h1>
        <div className="mb-3">
        <textArea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode===`dark`?`#13466e`:`white`, color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textArea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1"  onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1"  onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1"  onClick={handleCopy}>Copy the Text</button>

      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
          <h2>Your text Summary</h2>
          <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
          <p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
          <h2>Priview</h2>
          <p>{text.length>0?text:"Nothing to priview!"}</p>
      </div>
    </>
  )
}
