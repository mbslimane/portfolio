import React from 'react'
import sImg from '../assets/ss.png'
import { useInfo } from '../contexts/userContext/InfoContext'
import tw from "tailwind-styled-components"
import { Button } from '../style/twS';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const Header = () => {
  const { firstName } = useInfo()
  return (

    <Wrapper className='fixed'>
      <Container>
        <LogoContainer>
          <img src={sImg} alt="logo" className='h-10 ' />
          <h2 className='text-fontColor-400 pl-0.5'>oloman</h2>
        </LogoContainer>

        <nav className=''>
          <List>
            <li className='cursor-pointer'>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}

              // onSetActive={handleSetActive}
              >
                About
              </Link>
            </li>
            <li className=''>
              <a href="#Pr">About Me</a>
            </li>
            <li className=''>
              <a href="#">Services</a>
            </li>
            <li className=''>
              <a href="#">Project</a>
            </li>
            <li className=''>
              <a href="#">Pages</a>
            </li>
            <li className=''>
              <a href="#">contact Us</a>
            </li>
          </List>
        </nav>

        <div>
          <a href=""><Button >contact Me</Button></a>
        </div>
      </Container>
    </Wrapper>
  )
}

export default Header

const Wrapper = tw.div`
w-full bg-bgGray-100 
`
const Container = tw.div`
px-40 py-6 flex justify-between  text-fontColor-100 items-center
`
const LogoContainer = tw.div`
flex h-10 items-baseline
`
const List = tw.div`
flex items-center gap-6 list-none
`