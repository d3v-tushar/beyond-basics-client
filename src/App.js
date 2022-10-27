import './App.css';
import Main from './layouts/Main/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Courses from './components/Courses/Courses';
import FAQ from './components/FAQ/FAQ';
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import CourseDetails from './components/CourseDetails/CourseDetails';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import PrivateRoute from './route/PrivateRoute';
import Checkout from './components/Checkout/Checkout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/courses',
          element: <Courses></Courses>,
          loader: () => fetch('courses.json')
        },
        {
          path: '/course/:courseId',
          loader: async({params}) => {
            return fetch(`https://beyond-basics-server.vercel.app/courses/${params.courseId}`)
          },
          element: <CourseDetails></CourseDetails>
        },
        {
          path: '/faq',
          element: <FAQ></FAQ>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/profile',
          element: <PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
          path: '/checkout/:courseId',
          element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
          loader: async({params}) => {
            return fetch(`https://beyond-basics-server.vercel.app/courses/${params.courseId}`)
          }
        }
      ]
    },
    {
      path: '*',
      element: <NotFound></NotFound>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
