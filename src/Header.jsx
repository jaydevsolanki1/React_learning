function Header() {
    return (
        <>
            <header>
                <div className="navbar ">
                    <div className="navbar-start">
                        <a href="/" className="btn btn-ghost normal-case text-xl fs-4">Ishushi Learning</a>
                    </div>
                    <div className="navbar-center">
                        <ul className="d-flex gap-5 list-unstyled jutify-content-center align-items-center">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/courses">Courses</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <button className="btn btn-primary m-1">Login</button>
                    </div>
                </div>
                <hr />
            </header>
        </>
    );  
}
export default Header;