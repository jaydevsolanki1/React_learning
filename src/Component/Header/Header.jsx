import React, { useState, useEffect, useRef } from "react";
import "./Header.css";

function Header({ mode, setMode }) {
  // ===============================
  // STATE
  // ===============================

  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [activeMenu, setActiveMenu] = useState("Home");

  // ===============================
  // REFS
  // ===============================

  const titleRef = useRef(null);
  const formRef = useRef(null);
  const searchRef = useRef(null);

  // ===============================
  // MENU ITEMS
  // ===============================

  const menuItems = [
    { id: 1, name: "Home" },
    { id: 2, name: "About" },
    { id: 3, name: "Services" },
    { id: 4, name: "Contact" },
    { id: 5, name: "Login" },
    { id: 6, name: "Details" },
    { id: 7, name: "Cards" },
    { id: 8, name: "User Details" },
    { id: 9, name: "Greeting" },
    { id: 10, name: "More Services" },
  ];
  // ===============================
  // DARK / LIGHT MODE
  // ===============================

  useEffect(() => {
    document.body.className =
      mode === "dark" ? "bg-dark text-light" : "bg-light text-dark";
  }, [mode]);

  // ===============================
  // ANIMATION
  // ===============================

  useEffect(() => {
    const reTrigger = (element, animation) => {
      if (!element) return;

      element.classList.remove(animation);
      void element.offsetWidth;
      element.classList.add(animation);
    };

    reTrigger(titleRef.current, "animate__fadeInRight");
    reTrigger(formRef.current, "animate__fadeInDown");
  }, [mode]);

  // ===============================
  // CLOSE SEARCH WHEN CLICK OUTSIDE
  // ===============================

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  // ===============================
  // SEARCH
  // ===============================

  const handleSearch = (e) => {
    const value = e.target.value;

    setSearch(value);

    if (!value.trim()) {
      setSuggestions([]);
      return;
    }

    const filtered = menuItems.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    );

    setSuggestions(filtered);
  };

  // ===============================
  // SELECT SUGGESTION
  // ===============================

  const handleSuggestionClick = (item) => {
    setSearch(item.name);
    setSuggestions([]);
  };

  // ===============================
  // THEME TOGGLE
  // ===============================

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  // ===============================
  // ACTIVE MENU
  // ===============================

  const handleMenuClick = (name) => {
    setActiveMenu(name);
  };
  // ===============================
  // BOOTSTRAP CLASSES
  // ===============================

  const navbarClass = `navbar navbar-expand-lg fixed-top shadow-sm ${
    mode === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-white"
  }`;

  const offcanvasClass = `offcanvas offcanvas-end ${
    mode === "dark" ? "bg-dark text-light" : "bg-white text-dark"
  }`;

  const inputClass = `form-control ${
    mode === "dark"
      ? "bg-dark text-light border-secondary input-dark"
      : "bg-white text-dark input-light"
  }`;

  const buttonClass = `btn ${
    mode === "dark" ? "btn-outline-light" : "btn-outline-dark"
  }`;

  // ===============================
  // JSX
  // ===============================

  return (
    <>
      <div>
        <nav className={navbarClass}>
          <div className="container-fluid">
            {/* Logo */}

            <a href="#" className="navbar-brand d-flex align-items-center">
              <img
                src="/Knight.png"
                alt="Logo"
                width="42"
                height="42"
                className="rounded-circle shadow-sm me-2"
              />

              <span
                ref={titleRef}
                className={`fw-bold fs-3 animate__animated animate__fadeInRight ${
                  mode === "dark" ? "text-warning" : "text-primary"
                }`}
              >
                A$CE
              </span>
            </a>

            {/* Mobile Menu Button */}

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#mainMenu"
              aria-controls="mainMenu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Desktop Section */}

            <div className="collapse navbar-collapse justify-content-end d-none d-lg-flex">
              {/* ===========================
                Desktop Search
          =========================== */}

              <form
                ref={(el) => {
                  formRef.current = el;
                  searchRef.current = el;
                }}
                className="search-wrapper mx-4 position-relative animate__animated animate__fadeInDown"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="input-group">
                  <input
                    type="search"
                    placeholder="Search..."
                    className={inputClass}
                    value={search}
                    onChange={handleSearch}
                  />

                  <button type="button" className={buttonClass}>
                    <i className="fa fa-search"></i>
                  </button>
                </div>

                {/* Suggestions */}

                {suggestions.length > 0 && (
                  <div
                    className={`suggestion-box ${
                      mode === "dark"
                        ? "bg-dark text-light"
                        : "bg-white text-dark"
                    }`}
                  >
                    {suggestions.map((item) => (
                      <div
                        key={item.id}
                        className={`suggestion-item px-3 py-2 ${
                          mode === "dark" ? "border-secondary" : ""
                        }`}
                        onClick={() => handleSuggestionClick(item)}
                        style={{ cursor: "pointer" }}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                )}
              </form>

              {/* ===========================
                Theme Button
          =========================== */}

              <button
                onClick={toggleTheme}
                className={`btn ms-3 ${
                  mode === "dark" ? "btn-warning" : "btn-dark"
                }`}
                title={mode === "dark" ? "Light Mode" : "Dark Mode"}
              >
                {mode === "dark" ? (
                  <i className="fa fa-sun-o"></i>
                ) : (
                  <i className="fa fa-moon-o"></i>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* ==========================================
                MOBILE OFFCANVAS MENU
      ========================================== */}

        <div
          className={offcanvasClass}
          tabIndex="-1"
          id="mainMenu"
          aria-labelledby="mainMenuLabel"
        >
          {/* Header */}

          <div className="offcanvas-header border-bottom">
            <h5
              className={`offcanvas-title fw-bold ${
                mode === "dark" ? "text-warning" : "text-primary"
              }`}
              id="mainMenuLabel"
            >
              A$CE MENU
            </h5>

            <button
              type="button"
              className={`btn-close ${
                mode === "dark" ? "btn-close-white" : ""
              }`}
              data-bs-dismiss="offcanvas"
            ></button>
          </div>

          {/* Body */}

          <div className="offcanvas-body">
            {/* ===========================
                    Search
          =========================== */}

            <form
              className="position-relative mb-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="input-group">
                <input
                  type="search"
                  placeholder="Search..."
                  className={inputClass}
                  value={search}
                  onChange={handleSearch}
                />

                <button type="button" className={buttonClass}>
                  <i className="fa fa-search"></i>
                </button>
              </div>

              {suggestions.length > 0 && (
                <div
                  className={`suggestion-box mt-2 ${
                    mode === "dark"
                      ? "bg-dark text-light"
                      : "bg-white text-dark"
                  }`}
                >
                  {suggestions.map((item) => (
                    <div
                      key={item.id}
                      className={`suggestion-item px-3 py-2 ${
                        mode === "dark" ? "border-secondary" : ""
                      }`}
                      onClick={() => handleSuggestionClick(item)}
                      style={{ cursor: "pointer" }}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              )}
            </form>
            {/* ===========================
                Theme Button
          =========================== */}

            <div className="mt-4">
              <button
                type="button"
                onClick={toggleTheme}
                className={`btn w-100 ${
                  mode === "dark" ? "btn-warning text-dark" : "btn-dark"
                }`}
              >
                {mode === "dark" ? (
                  <>
                    <i className="fa fa-sun-o me-2"></i>
                    Light Mode
                  </>
                ) : (
                  <>
                    <i className="fa fa-moon-o me-2"></i>
                    Dark Mode
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
