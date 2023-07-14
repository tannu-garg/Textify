import React , {useState} from 'react'

export default function Textform(props) {

      const[myStyle]= useState({
      color:'black',
      backgroundColor:'white'}
    );
 /*const[btntext,setBtnText]=useState("Enable Dark Mode");
    const handleDark=()=>
    {
      if(myStyle.color==='black')
      {
        setMyStyle
        ({
          color:'white',
          backgroundColor:'black',
          border:'2px solid white'
        })
        setBtnText("Enable Light Mode");
      }
      else
      {
        setMyStyle
        ({
          color:'black',
          backgroundColor:'white'
        })
        setBtnText("Enable Dark Mode");
      }
    };*/
    const handleUpclick =() =>{
        console.log("upper case was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText)
    };
    const handleClear=()=>{
           let newText='';
           setText(newText);
    };
    const handleLoclick =() =>{
      console.log("upper case was clicked"+text);
      let newText=text.toLowerCase();
      setText(newText)
  };
    const handleOnChange=(event) =>{
        console.log("On change");
        setText(event.target.value);
    };
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }
    
    const [text, setText] = useState("");
    //setText("new text");
  return (
<>
<div className="container" style={{color:props.mode==='dark'?'white':'grey'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:
props.mode==='dark'?'white':'grey'}}
onChange={handleOnChange} id="TextBox" rows="10"></textarea>
</div>
<button className="btn btn-primary mx-2" style={myStyle}  onClick={handleUpclick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2"  style={myStyle} onClick={handleLoclick}>Convert to LowerCase</button>
{/*<button type='button' className="btn btn-primary mx-2" style={myStyle} onClick={handleDark}>{btntext}</button>*/}
<button type='button' className="btn btn-primary mx=2" style={myStyle} onClick={handleClear} >Clear Text</button>
<button type='button' className="mx-2 btn btn-primary" style={myStyle} onClick={speak}>Speak</button>
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'grey'}}>
<h1>Your Text Summary</h1>
<p>{text.split(" ").length}  words and {text.length} characters</p>
<p>{0.008*text.split(" ").length} Minutes to read</p>
<h3>Preview Your Text</h3>
<p>{text.length>0?text:"Enter something in textbox to preview"}</p>
</div>
</>
  )
  }
