import { Route, Routes } from 'react-router-dom';
import React from "react";
import Loadable from "react-loadable";
import Header from './components/Header/Header.jsx';
import Logo from './components/Logo/Logo.jsx';
import Basic from "./components/Routes/Basic/Basic.jsx";
import Manage from "./components/Routes/Manage/Manage.jsx";
import Reports from "./components/Routes/Reports/Reports.jsx";
import Schedule from "./components/Routes/Schedule/Schedule.jsx";
import Settings from "./components/Routes/Settings/Settings.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="kanban-wrapper">
        <div className="kanban">
          <Logo />
          <Header />
          <Sidebar />
          <Routes>
            <Route exact path="/octo-process/" component={Basic} element ={new Basic().render()}/>
            <Route path="/octo-process/manage" component={Manage} element ={new Manage().render()}/>
            <Route path="/octo-process/schedule" component={Schedule} element ={new Schedule().render()}/>
            <Route path="/octo-process/reports" component={Reports} element ={new Reports().render()}/>
            <Route path="/octo-process/settings" component={Settings} element ={new Settings().render()}/>
          </Routes>
        </div>
      </div>
    );
  }
}

const Loading = () => <div className="loading">Loading...</div>;

const Sidebar = Loadable({
  loader: () => import("./components/Sidebar/Sidebar.jsx"),
  loading: Loading
});

export default App;
