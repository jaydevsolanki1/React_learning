import Student, { UserGretting, AnotherGreeting } from "./Student";

function UserDetails() {
  return (
    <>
      <h1 className="fs-1 text-center">Users Details</h1>
      <div className="d-flex flex-wrap justify-content-center rounded-4 container-fluid ">
        <span className=" p-3">
          <Student /> {/*  Default props will be used */}
        </span>
        <span className=" p-3">
          <Student user="jaydev" age={21} gender="Male" isfollowing={true} />
        </span>
        <span className=" p-3">
          <Student user="riya" age={42} gender="Female" isfollowing={true} />
        </span>
        <span className=" p-3">
          <Student user="ram" age={64} gender="Male" isfollowing={false} />
        </span>
        <span className=" p-3">
          <Student user="janvi" age={23} gender="Female" isfollowing={false} />
        </span>
        <span className=" p-3">
          <Student user="shreya" age={66} gender="Female" isfollowing={true} />
        </span>
        <span className=" p-3">
          <Student user="rahul" age={22} gender="Male" isfollowing={false} />
        </span>
        <span className=" p-3">
          <Student user="suhani" age="11" gender="Female" isfollowing={true} />
        </span>
        <br />
      </div>{" "}
      <hr />
      <br />
      <h1 className="fs-1 text-center">Gretting</h1>
      <br />
      <div className="d-flex flex-wrap justify-content-evenly rounded-4 container-fluid p-1">
        <div className=" col-12 col-md-5 col-lg-6 d-flex flex-column justify-content-start mt-3 ">
          <h2 className="text-center fs-4">Users</h2>
          <hr />
          <div className="d-flex flex-wrap justify-content-center rounded-4  p-1">
            <UserGretting isloggin={true} username="ramji" />
            <UserGretting />
            <br />
          </div>
        </div>

        {/* __________________________________________________________ */}
        <div className="col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center mt-3">
          {/* <br /> */}
          <h2 className="text-center fs-4">Cheack Login </h2>
          <hr />
          <div className="col-12 ">
            <span className=" border-top"> LOGIN :'User login status' </span>
            <AnotherGreeting loginUser="jaydev" ifloggin={true} />
            <span className="border-top"> LOGIN : 'User login status'</span>
            <AnotherGreeting loginUser="kalu" ifloggin={false} />
            <span className="border-top"> LOGIN : 'User login status'</span>
            <AnotherGreeting />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetails;
