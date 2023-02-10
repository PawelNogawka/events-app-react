import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainRoot from "./pages/MainRoot";
import EventsRoot from "./pages/EventsRoot";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Events, { loader as eventsLoader } from "./pages/Events";
import EventDetail, { loader as detailsLoader } from "./pages/EventDetail";
import EditEvent, { action as detailAction } from "./pages/EditEvent";
import NewEvent, { action as newEventAction } from "./pages/NewEvent";

import "./App.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          { index: true, element: <Events />, loader: eventsLoader },
          {
            path: ":id",
            id: "event",
            loader: detailsLoader,
            children: [
              { index: true, element: <EventDetail /> },
              { path: "edit", element: <EditEvent />, action: detailAction },
            ],
          },
          { path: "new", element: <NewEvent />, action: newEventAction },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
