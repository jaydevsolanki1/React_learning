import React, { useState, useEffect } from "react";
import "./Header.css"; // Make sure this file exists and is linked

function Header({ mode, setMode }) {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const data = [
    "Home",
    "About",
    "Services",
    "Contact",
    "Login",
    "Details",
    "Cards",
    "User Details",
    "Greeting",
    "More Services",
  ];

  useEffect(() => {
    document.body.className =
      mode === "dark" ? "bg-dark text-light" : "bg-light text-dark";
  }, [mode]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value.length > 0) {
      setSuggestions(
        data.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
      );
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearch(suggestion);
    setSuggestions([]);
  };

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };
const navClass = `navbar fixed-top ${
  mode === "dark"
    ? "bg-dark text-light navbar-dark"
    : "bg-body-tertiary text-dark navbar-light"
}`;

  const offcanvasClass = `offcanvas offcanvas-end ${
    mode === "dark" ? "bg-dark text-light" : "bg-body-tertiary text-dark"
  }`;
  const inputClass = `form-control me-2 ${
    mode === "dark" ? "bg-dark text-light border-light" : ""
  }`;
  const btnClass = `btn ${
    mode === "dark"
      ? "btn-outline-light border-light "
      : "btn-outline-dark border-dark"
  } animate__animated animate__pulse animate__infinite`;
  

  return (
    <>
      <nav className={navClass}>
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="/Knight.png"
              alt="Logo"
              width="40"
              height="40"
              className={`me-2 shadow-sm rounded-circle ${
                mode === "dark" ? "bg-dark" : "bg-light"
              }`}
            />
            <span
              className={`fw-bold fs-4 animate__animated animate__fadeInRight ${
                mode === "dark" ? "text-warning" : "text-dark"
              }`}
            >
              A$CE
            </span>
          </a>
          <form
            className="d-flex mx-auto my-2 w-50 position-relative animate__animated animate__fadeInDown"
            role="search"
          >
            <input
              className={`form-control  ${inputClass} ${
                mode === "dark" ? "input-dark" : "input-light"
              }`}
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={handleChange}
            />
            <button className={btnClass} type="submit">
              <i className="fa fa-search"></i>
            </button>
            {suggestions.length > 0 && (
              <div
                className={`position-absolute w-100 rounded ${
                  mode === "dark" ? "bg-dark text-light" : "bg-light text-dark"
                }`}
                style={{ top: "100%", zIndex: 1000 }}
              >
                <div
                  className="px-3 py-2 small fw-bold border-bottom"
                  style={{
                    backgroundColor: mode === "dark" ? "#333" : "#f8f9fa",
                  }}
                >
                  Suggestions
                </div>
                <ul className="list-group list-group-flush">
                  {suggestions.map((item, idx) => (
                    <li
                      key={idx}
                      className={`list-group-item list-group-item-action ${
                        mode === "dark"
                          ? "bg-dark text-light"
                          : "bg-light text-dark"
                      }`}
                      onClick={() => handleSuggestionClick(item)}
                      style={{ cursor: "pointer" }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </form>

          {/* ✅ Fixed Toggle Button */}
          <button
            className={`navbar-toggler ${btnClass} animate__animated animate__pulse animate__infinite ${
              mode === "dark"
                ? "custom-toggler-dark text-light"
                : "custom-toggler-light text-dark"
            }`}
            type="button"
            title={
              mode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"
            }
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Theme toggle button */}
          <button
            className={`btn ms-2 ${mode === "dark" ? "btn-dark" : "btn-light"}`}
            onClick={toggleMode}
            title={
              mode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"
            }
            style={{ borderRadius: "50%" }}
          >
            {mode === "dark" ? (
              <i className="fa fa-sun-o"></i>
            ) : (
              <i className="fa fa-moon-o"></i>
            )}
          </button>
        </div>
      </nav>

      <div
        className={offcanvasClass}
        tabIndex="-1"
        id="navbarSupportedContent"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul
            className={`navbar-nav ms-auto mb-2 mb-lg-0 w-100 justify-content-center d-flex ${
              mode === "dark" ? "text-light" : "text-dark"
            }`}
          >
            {data.map((item, idx) => (
              <li className="nav-item" key={idx}>
                <a
                  className={`nav-link ${
                    mode === "dark" ? "text-light" : "text-dark"
                  }`}
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Animate.css CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    </>
  );
}

export default Header;
