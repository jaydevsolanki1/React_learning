import Student, { UserGretting, AnotherGreeting } from "./Student";

function UserDetails() {
  return (
    <>
      <h1 className="fs-1 text-center">Users Details</h1>
      <div className="d-flex flex-wrap justify-content-center rounded-4">
        <Student /> {/*  Default props will be used */}
        <Student user="jaydev" age={21} gender="Male" isfollowing={true} />
        <Student user="riya" age={42} gender="Female" isfollowing={true} />
        <Student user="ram" age={64} gender="Male" isfollowing={false} />
        <Student user="janvi" age={23} gender="Female" isfollowing={false} />
        <Student user="shreya" age={66} gender="Female" isfollowing={true} />
        <Student user="rahul" age={22} gender="Male" isfollowing={false} />
        <Student user="suhani" age="11" gender="Female" isfollowing={true} />
        <br />
      </div>{" "}
      <hr />
      <br />
      <h1 className="fs-1 text-center">Gretting with user</h1>
      <br />
      <div className="d-flex flex-wrap justify-content-between rounded-4 container">
        <div>
          <h2 className="text-center fs-4">User Gretting</h2>
          <hr />
          <div className="d-flex flex-wrap justify-content-center rounded-4">
            <UserGretting isloggin={true} username="ramji" />
            <UserGretting />
            <br />
          </div>
        </div>
        {/* __________________________________________________________ */}
        <div>
          <h2 className="text-center fs-4">Other Gretting & cheack </h2>
          <hr />
          <span className=" border-top"> LOGIN :'User login status' </span>
          <AnotherGreeting loginUser="jaydev" ifloggin={true} />
          <span className="border-top"> LOGIN : 'User login status'</span>
          <AnotherGreeting loginUser="kalu" ifloggin={false} />
          <span className="border-top"> LOGIN : 'User login status'</span>
          <AnotherGreeting/>
        </div>
      </div>
    </>
  );
}

export default UserDetails;
