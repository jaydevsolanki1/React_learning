import CardWrapper from "./Component/card/Card.wrapper";
import Fotter from "./Component/Fotter/Fotter";
import Header from "./Component/Header/Header";
import Details from "./Component/Main/Details_Main";
import UserDetails from "./Component/studentUser/UserDetails";

function App() {
  return (
    <>
      <Header />
      <Details />
      <CardWrapper />
      <UserDetails />
      <Fotter />
    </>
  );
}
export default App;
