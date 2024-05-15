import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import { InfoProvider } from './contexts/userContext/InfoContext'
import Home from './component/Home';
import tw from "tailwind-styled-components"
import About from './component/About';
import WorkPortfolio from './component/WorkPortfolio';
import Education from './component/Education';
import ContactUs from './component/ContactUs';
import Footer from './component/Footer';
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'
import RouteLayout from './Layout/RouteLayout';

function App() {
  const firstName = "Slimane";
  const lastName = "Moussaoubrahim";
  const email = "mbsloimane16@gmail.com"
  const phoneNumber = "1234567890"

  const setFirstName = () => { }
  const setLastName = () => { }
  const setEmail = () => { }
  const setPhoneNumber = () => { }


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RouteLayout />}>
        <Route index path='/' element={<Home />} />

        {/* <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<WorkPortfolio />} />
        < Route path='/path' element={<Education />} />
        < Route path='/contact' element={<ContactUs />} /> */}
        {/* < Route path='/contact' element={<ContactUs />} /> */}
      </Route>
    )
  )

  return (
    <InfoProvider value={{
      firstName,
      lastName,
      email,
      phoneNumber,
      setFirstName,
      setLastName,
      setEmail,
      setPhoneNumber
    }}>

      <Wrapper >
        <Container className='bg-bgGray-200 overflow-x-scroll'>
          {/* <About /> */}
          {/* <Header />
          <Home />
          <WorkPortfolio />
          <Education />
          <ContactUs />
          <Footer /> */}

          <RouterProvider router={router} />


        </Container>
      </Wrapper>
    </InfoProvider>
  )
}

export default App

const Wrapper = tw.div`
bg-bgGray-100 h-full w-full
`

const Container = tw.div`
max-w-screen-2xl flex-col justify-center items-center m-auto 
`