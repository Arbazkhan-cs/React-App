import PropType from "prop-types"

export default function Navbar(props) {
  // ============================================navbar============================================================
  return (
    <nav className={`navbar navbar-expand-lg`} style={{ backgroundColor: props.modeStyle.color === "black"? "#f8f9fa":"#0e0e49"}}>
      <div className="container-fluid">

        {/* ==============================================Nav title===================================================== */}
        <a className={`navbar-brand text-${props.modeStyle.color}`} href="#">{props.title}</a>
        
        {/* ====================================Scripting the button for mobile phones navbar========================== */}
        <button className={`navbar-toggler text-${props.modeStyle.color}`} style={{backgroundColor: props.modeStyle.color==="white"?"white":"#f8f9fa"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* =========================== Nav <a> tag========================================================== */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link text-${props.modeStyle.color}`} aria-current="page" href="#">{props.home}</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link text-${props.modeStyle.color}`} href="#" >{props.about}</a>
            </li>
          </ul>
          {/* ============================================================================================================= */}


          {/* ==========================For Switch Dark Mode===================================== */}
          <div className="w-100">
            <div className="form-check form-switch my-2 d-flex align-items-center flex-row-reverse gap-1" style={{color: props.modeStyle.color}}>
                <div id="mode-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{ cursor: "pointer" }} onClick={props.darkMode} />
                            <label className="form-check-label" style={{ cursor: "pointer" }} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                </div>
          {/* =================================================================================== */}
            </div>
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