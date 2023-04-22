import Navbar from "./components/Navbar.js"
import Form from "./components/Form.js"
import Alert from "./components/Alert.js"
import React, { useState } from 'react'


function App() {
  const [modeStyle, setMode] = useState({
    color: "black",
    backgroundColor: "white"  
  })

  // Alert Function
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type)=>{
      setAlert({
        msg: msg,
        type: type
      });
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  
  // Dark Mode Function
  const darkMode = (cls) => {
    if(modeStyle.backgroundColor === "white"){
      setMode({
        color: "white",
        backgroundColor: "#01001f"
      })
      document.body.style.background = "#01001f";
      showAlert("Dark mode enabled", "success");
    
    } else{
      setMode({
        color: "black",
        backgroundColor: "white"
      })
      showAlert("Dark mode disabled", "danger");
      document.body.style.background = "white";
    }
  }


  return (
    <div className="App">
      <Navbar home="Home" title="Text Utils" about="About" darkMode={darkMode} modeStyle={modeStyle} showAlert={showAlert}/>

      <div>
        <Alert alert={alert}/>
      </div>

      <div className="container my-5">
        <Form modeStyle={modeStyle} showAlert={showAlert} title="Try TextUtils - word counter, character counter, remove extra spaces" />
      </div>

    </div>
  );
}

export default App;
