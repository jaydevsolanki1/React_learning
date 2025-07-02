import UserGretting from "./UserGretting";

function UserGrettingWrap({ mode = "light" }) {
  const themeClass = mode === "dark" ? "bg-dark text-light" : "bg-light text-dark";

  return (
    <>
      <hr />
      <div className={`py-4 ${themeClass}`}>
        <h1 className="fs-1 text-center mb-5">Greeting</h1>

        <div className="container">
          <h2 className="text-center fs-5">( i ) Users</h2>
          <hr />

          {/* ✅ Bootstrap Grid Row */}
          <div className="row justify-content-center g-4">
            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
              <UserGretting isloggin={true} username="ramji" mode={mode} />
            </div>
            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
              <UserGretting mode={mode} />
            </div>
            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
              <UserGretting mode={mode} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserGrettingWrap;
