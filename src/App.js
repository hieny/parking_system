import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminDashBoard from "./pages/Admin/AdminDashBoard/AdminDashBoard";
import AdminRequestMana from "./pages/Admin/AdminRequestMana/AdminRequestMana";
import AdminVehicleMana from "./pages/Admin/AdminVehicleMana/AdminVehicleMana";
import Booking from "./pages/Booking/Booking";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import UserRequest from "./pages/UserRequest/UserRequest";
import UserUpdate from "./pages/UserUpdate/UserUpdate";
import UserVehicle from "./pages/UserVehicle/UserVehicle";
import AdminUserMana from "./pages/Admin/AdminUserMana/AdminUserMana";
// import { DashBoardTemplate } from "./template/DashBoard/DashBoardTemplate";
import { NormalTemplate } from "./template/Normal/Normal/NormalTemplate";
import LandingPage from "./pages/LandingPage/LandingPage";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <BrowserRouter>
      <Modal />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <NormalTemplate path="/dashboard" exact Component={UserDashboard} />
        <NormalTemplate path="/userUpdate" exact Component={UserUpdate} />
        <NormalTemplate path="/userrequest" exact Component={UserRequest} />
        <NormalTemplate path="/uservehicle" exact Component={UserVehicle} />
        <NormalTemplate path="/booking" exact Component={Booking} />
        <NormalTemplate path="/adashboard" exact Component={AdminDashBoard} />
        <NormalTemplate
          path="/avevhiclemanagerment"
          exact
          Component={AdminVehicleMana}
        />
        <NormalTemplate
          path="/arequestmanagerment"
          exact
          Component={AdminRequestMana}
        />
        <NormalTemplate path="/admanagerment" exact Component={AdminUserMana} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
