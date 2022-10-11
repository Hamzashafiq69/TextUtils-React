import React,{useState} from 'react'

export default function TextForm(props) {
    const handleupclick = ()=> {
        // console.log("Uppercase was clicked" + text);
        let  newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("converted to upperCase","success");
}
    const handledownclick = ()=> {
        // console.log("Uppercase was clicked" + text);
        let  newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("converted to lowerCase","success");
}

    const handleonchange = (event)=> {
        // console.log("on Change");
        setText(event.target.value);
    }
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }
    // It is targetted by the button 'speak':

    const handleCapitalize = ()=>{
      let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
      setText(newText);
    }


    const handlespaces =()=>{
      
        let words = text.split(' ');
        let joinedWords = '';
        
        words.forEach((elem)=>{
            if(elem[0] != undefined){
                joinedWords += elem + " ";
                
            }
            setText(joinedWords);
        })
      }

    
    

    let mystyle = {
      border :  props.mode ==='dark'? '1px solid white' : '1px solid black'}
    const [text,setText] = useState("");



  return (
    <>
<div className="container" style={{color : props.mode ==='dark'? 'white' : 'black'}}>
        <h1>{props.heading} </h1>
      <div className="mb-3">
      
  <textarea className="form-control" onChange={handleonchange} style={{backgroundColor : props.mode ==='dark'? 'grey' : 'white', color:  props.mode ==='dark'? 'white' : 'black'}} value={text} id="mybox" rows="8"></textarea>
  </div>
<button className="btn btn-primary "  onClick={handleupclick}>Convert to Uppercase</button>

<button className="btn btn-primary my-3 mx-2"   onClick={handledownclick}>Convert to LowerCase</button>

<button className="btn btn-primary my-3 "   onClick={handleCapitalize}>Capoitalize First letter</button>

{/* <button className="btn btn-primary" my-3  onClick={Handlecopy}>Copy Text</button> */}

<button className="btn btn-primary my-3 mx-2"   onClick={handlespaces}>Remove extra Spaces</button>



<button type="submit" onClick={speak} className="btn btn-warning  my-2">Speak</button>



</div >
<div className="container my-2" style={{color : props.mode ==='dark'? 'white' : 'black'}}>
  <h2>Your text summary</h2>
  <p>{text.split(" ").length} words and {text.length} Characters</p>
  <p>{0.008* text.split(" ").length} (minutes) Time to read</p>
  <h2>Preview</h2>
  <p style={mystyle}>{text.length>0 ? text: "Enter something in the textarea to preview here"}</p>
</div>


</>
  )
}
