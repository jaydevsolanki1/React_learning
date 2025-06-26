function Fotter({ mode = "light" }) {
  const themeClass = mode === "dark" ? "bg-dark text-light" : "bg-light text-dark";
  return (
    <footer className={`${themeClass} py-4`}>
      <hr />
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Ishushi Learning. All rights reserved.</p>
      </div>
    </footer>
  );
}
export default Fotter;