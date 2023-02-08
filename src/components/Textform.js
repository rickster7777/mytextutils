import React, {useState} from 'react'
/*
const [text, setText] = useState('Enter text here');
remeber above line of code

It involves the process array destructuring similar thing which I've seen in John smilga's nodejs tutorial
In above case Initially, text=Enter text here

After that when it's updated it has to be updated through setText
 YOU CANNOT VHANGE THE STATE LIKE text="changing state"
*/
function Textform(props) {
    const handleUpClick = () =>{
        console.log("Uppercase was clicked")
        // setText("You have clicked on handleUpClick")
        let newText = text.toUpperCase();
        setText(newText);
    }
    
    const handlelowerClick = () =>{
        console.log("Lowercase was clicked")
        // setText("You have clicked on handleUpClick")
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to lowercase", "success")
    }
    const handleOnChange = (event) => {
        console.log("on change")
        setText(event.target.value)
         
    }

    //Copy text function
    //Remove extra spaces
    const handleSpaces = (event) => {
        let trimtext = text.trim();
        setText(trimtext)
         
    }
    //

    const [text, setText] = useState('Enter text here');
    //text = "new text"; //Wrong way to update the state
    //setText("new text") //Correct way to update the state
    return (
        <div>
            <h1 style={{backgroundColor:props.mode === 'light'?'white':'grey'}}>{props.heading} - {text}</h1>
            <div className="mb-3" style={{backgroundColor:props.mode === 'light'?'white':'grey'}}>
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

            </div>
            {/* Warning: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. 
            If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
            */}
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}
                style={{backgroundColor:props.mode === 'light'?'white':'grey'}}></textarea>
            </div>
            <button className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to uppercase</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handlelowerClick}>Convert to lowercase</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleSpaces}>Remove Spaces</button>
            <div className='container' style={{backgroundColor:props.mode === 'light'?'white':'grey'}}>
            <h3 >Your text summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <h3>Preview</h3>
            <p>{text}</p>
            </div>
        </div>
    )
}

export default Textform
