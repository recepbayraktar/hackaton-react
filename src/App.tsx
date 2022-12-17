import { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { getAPI } from './features/getAPI';
import { useSelector } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home';

function App() {
  const dispatch = useAppDispatch()
 
  useEffect(() => {
    dispatch(getAPI())
  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home />
      ),
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
