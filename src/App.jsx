import CardWrapper from "./Component/card/Card.wrapper";
import Fotter from "./Component/Fotter/Fotter";
import Header from "./Component/Header/Header";
import List from "./Component/List/List";
import Details from "./Component/Main/Details_Main";
import UserDetails from "./Component/StudentUser/UserDetails";

function App() {
  return (
    <>
      <Header />
      <Details />
      <CardWrapper />
      <UserDetails />
      <List/>
      <Fotter />
    </>
  );
}
export default App;
