import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppliedJobs from './AppliedJobs/AppliedJobs'
import Statistics from './Statistics/Statistics'
import ErrorPage from './ErrorPages/ErrorPage'
import FeatureJobDetails from './FeaturesJob/FeatureJobDetails'
import Root from './Root/Root'
import Home from './Home/Home'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>,
        loader : ()=> fetch('../jobs.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: "/featureJob/:id",
        element: <FeatureJobDetails></FeatureJobDetails>,
        loader: () => fetch('../jobs.json')
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
