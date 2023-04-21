import PropType from "prop-types"

export default function Navbar(props) {
  const selectType = (e) => {
    let selectMode = document.getElementById("selectType").value;
    props.darkMode(selectMode);
  }

  let bg = "#f8f9fa";
  if (props.modeStyle.backgroundColor === "#0d3200") {
    bg = "rgb(34, 120, 4)";
  } else if (props.modeStyle.backgroundColor === "rgb(77, 2, 2)") {
    bg = "rgb(143, 3, 3)";
  } else if (props.modeStyle.backgroundColor === "#01001f") {
    bg = "#0e0e49";
  }


  return (
    <nav className={`navbar navbar-expand-lg`} style={{ backgroundColor: bg }}>
      <div className="container-fluid">
        <a className={`navbar-brand text-${props.modeStyle.color}`} href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link active text-${props.modeStyle.color}`} aria-current="page" href="#">{props.home}</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link disabled text-${props.modeStyle.color}`} href="#" >{props.about}</a>
            </li>
          </ul> */}
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}

          <div className="form-check form-switch d-flex gap-2 align-items-center position-absolute end-0 mx-3" style={{color: props.modeStyle.color}}>
            {/* <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{ cursor: "pointer" }} onClick={selectType} />

            <select className="form-select" id="selectType">
              <option value="Select Color">Select Mode</option>
              <option value="Dark Mode">Enable Dark Mode</option>
              <option value="Red Mode">Enable Red Mode</option>
              <option value="Green Mode">Enable Green Mode</option>
              <option value="Light Mode">Enable Light Mode</option>
            </select> */}



{/* =========================For Simple Dark Mode===================================== */}
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{ cursor: "pointer" }} onClick={props.darkMode} />
            <label className="form-check-label" style={{ cursor: "pointer" }} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
{/* =================================================================================== */}
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropType.string,
  home: PropType.string,
  about: PropType.string,
}

Navbar.defaultProps = {
  title: "TextUtils",
  home: "Home",
  about: "Navbar",
}