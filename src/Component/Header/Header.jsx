import React, { useState } from "react";

function Header() {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const data = [
    "Home",
    "About",
    "Services",
    "Contact",
    "Web Development",
    "App Development",
    "UI/UX Design",
    "SEO Optimization",
    "Consulting",
  ];

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

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="/j.png"
              alt="Logo"
              width="40"
              height="40"
              className="me-2 animate__animated animate__fadeIn bg-secondary"
              style={{ borderRadius: "50%" }}
            />
            <span className="fw-bold fs-4 animate__animated animate__fadeInRight animate__delay-10s">
              A$CE
            </span>
          </a>
          {/* Navbar toggler */}
          <button
            className="navbar-toggler animate__animated animate__pulse animate__infinite"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ transition: "box-shadow 0.3s" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Centered Search Bar */}
          <form
            className="d-flex mx-auto my-2 w-50 position-relative"
            role="search"
            autoComplete="off"
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={handleChange}
            />
            <button
              className="btn btn-outline-success animate__animated animate__pulse animate__infinite"
              type="submit"
              style={{
                transition: "background 0.3s, color 0.3s",
                fontWeight: "bold",
                borderRadius: "30px",
                boxShadow: "0 4px 12px rgba(40,167,69,0.15)",
              }}
            >
              <i className="fa fa-search"></i>
            </button>
            {suggestions.length > 0 && (
              <ul
                className="list-group position-absolute w-100"
                style={{ top: "100%", zIndex: 1000 }}
              >
                {suggestions.map((item, idx) => (
                  <li
                    key={idx}
                    className="list-group-item list-group-item-action"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleSuggestionClick(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </form>
          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <i className="fa fa-home me-1"></i> Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-info-circle me-1"></i> About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-cog me-1"></i> Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fa fa-info-circle me-2"></i>
                      Details
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fa fa-th me-2"></i>
                      Cards
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fa fa-user me-2"></i>
                      User Details
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fa fa-users me-2"></i>
                      Gretting
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fa fa-ellipsis-h me-2"></i>
                      More Services
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  <i className="fa fa-envelope me-1"></i> Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  login
                  <i className="fa fa-sign-in ms-1"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-disabled="true">
                  <i className="fa fa-moon-o ms-1"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Animate.css CDN for animation classes */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    </>
  );
}

export default Header;
