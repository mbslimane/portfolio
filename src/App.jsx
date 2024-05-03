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


function App() {
  const firstName = "Slimane";
  const lastName = "Moussaoubrahim";
  const email = "mbsloimane16@gmail.com"
  const phoneNumber = "1234567890"

  const setFirstName = () => { }
  const setLastName = () => { }
  const setEmail = () => { }
  const setPhoneNumber = () => { }
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
      <Wrapper>
        <Container>
          <Header />
          <Home />
          <About />
          <WorkPortfolio />
          <Education />
          <ContactUs />
          <Footer />
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