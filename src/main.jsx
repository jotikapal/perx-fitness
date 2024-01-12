import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";
import Navbar from './Pages/Navbar.jsx';
import Banner from './Pages/Banner.jsx';
import AboutMe from './Pages/AboutMe';
import Services from './Pages/Services.jsx';
import Timeline from './Pages/Timeline.jsx';
import Stories from './Pages/Stories.jsx';
import Contact from './Pages/Contact.jsx';
import Gallery from './Pages/Gallery.jsx';
import Footer from './Pages/Footer.jsx';
import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from 'react-scroll-section';

const Home = () => {
  return (
    <>
      <ScrollingProvider>
        <Navbar />
      </ScrollingProvider>
      <Banner />
      <AboutMe />
      <Services />
      <Timeline />
      <Stories />
      <Contact />
      <Gallery />
      <Footer />

    </>
  )
}

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/navbar',
    element: <Navbar />
  },
  {
    path: '/banner',
    element: <Banner />
  },
  {
    path: '/aboutMe',
    element: <AboutMe />
  },
  {
    path: '/services',
    element: <Services />
  },
  {
    path: '/timeline',
    element: <Timeline />
  },
  {
    path: '/stories',
    element: <Stories />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/gallery',
    element: <Gallery />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
