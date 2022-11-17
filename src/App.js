import { useRoutes } from 'react-router-dom';
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
          <MyRoutes />
        </div>
      </div>
    );
  }
}

const MyRoutes = () => {
  let routes = useRoutes([
    { exact:true, path: "/", element: {Basic} },
    { path: "/manage", element: {Manage} },
    { path: "/schedule", element: {Schedule} },
    { path: "/reports", element: {Reports} },
    { path: "/settings", element: {Settings} }
  ]);
  return routes;
};

const Loading = () => <div className="loading">Loading...</div>;

const Sidebar = Loadable({
  loader: () => import("./components/Sidebar/Sidebar.jsx"),
  loading: Loading
});

export default App;
