import logo from "./logo.svg";
import "./App.css";
import Login from "./component/Auth/Login";
import TopNav from "./component/Layout/TopNav.js";
import BasicInfo from "./component/UserProfile/UserTimelinePanel/BasicInfo/BasicInfo";
import UserTimeLinePanelIndex from './component/UserProfile/UserTimelinePanel'
function App() {
  return (
    <>
{/* <TopNav/> */}
<UserTimeLinePanelIndex/>
    </>
  )
}

export default App;
