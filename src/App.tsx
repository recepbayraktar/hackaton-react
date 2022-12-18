import { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { useSelector } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home';
import Loading from './pages/Loading';
import Search from './pages/Search';
import MovieDetail from './pages/MovieDetail';

function App() {
 
 
  useEffect(() => {
   
  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home />
      ),
    },
    {
      path: "search",
      element: <Search />,
    },
    {
      path: "movie/:id",
      element: <MovieDetail />,
    },
    
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
