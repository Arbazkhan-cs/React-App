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
    if (cls === "Dark Mode") {
      setMode({
        color: "white",
        backgroundColor: "#01001f"
      })
      document.body.style.background = "#01001f";
      showAlert("Dark mode enabled", "success");
      
    } else if(cls === "Red Mode"){
          setMode({
            color: "white",
            backgroundColor: "rgb(77, 2, 2)"
          })
          document.body.style.background = "rgb(77, 2, 2)";
          showAlert("Red mode enabled", "success");
    } else if(cls === "Green Mode"){
          setMode({
            color: "white",
            backgroundColor: "#0d3200"
          })
          document.body.style.background = "#0d3200";
          showAlert("Green mode enabled", "success");
    } else if(cls === "Light Mode"){
      setMode({
        color: "black",
        backgroundColor: "white"
      })
      document.body.style.background = "white";
      showAlert("Light mode enabled", "success");
    }
    
    if(modeStyle.backgroundColor == "white"){
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

      <div className="container w-75 my-5">
        <Form modeStyle={modeStyle} showAlert={showAlert}/>
      </div>

    </div>
  );
}

export default App;
