import AnotherGreeting from "./AnotherGretting";
function AnotherGreetingWrap({ mode = "light" }) {
     const themeClass =
    mode === "dark" ? "bg-dark text-light" : "bg-light text-dark";

    return (<>
    
    
    
    <div className={`py-4 ${themeClass}`}>

     <div className="col-12 col-md-6 col-lg-12 d-flex flex-column justify-content-center  container">
          <h2 className="text-center fs-5 ">(ii) Check Login</h2>
          <hr />
          <div className="col-12 d-flex flex-wrap justify-content-center rounded-5 p-1 ">
            <span className="border-top"> LOGIN : 'User login status'</span>
            <AnotherGreeting loginUser="jaydev" ifloggin={true} mode={mode} />
            <span className="border-top"> LOGIN : 'User login status'</span>
            <AnotherGreeting loginUser="kalu" ifloggin={false} mode={mode} />
            <span className="border-top"> LOGIN : 'User login status'</span>
            <AnotherGreeting mode={mode} />
          </div>
        </div>
    </div>
    </>)
}
export default AnotherGreetingWrap;