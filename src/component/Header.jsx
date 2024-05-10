import React from 'react'
import sImg from '../assets/ss.png'
import { useInfo } from '../contexts/userContext/InfoContext'
import tw from "tailwind-styled-components"
import { Button } from '../style/twS';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const { firstName } = useInfo()
  return (

    <Wrapper >
      <Menu><FontAwesomeIcon icon={faList} /> <LogoContainer>
        <img src={sImg} alt="logo" className='h-5 ' />
        <h2 className='text-fontColor-400 pl-0.5'>oloman</h2>
      </LogoContainer></Menu>
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
              <a href="#Pr">About</a>
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
              <a href="#">contact</a>
            </li>
          </List>
        </nav>

        <div>
          <a href=""><Button >contact</Button></a>
        </div>
      </Container>
    </Wrapper>
  )
}

export default Header

const Wrapper = tw.div`
w-full bg-bgGray-100 

`
const Menu = tw.div`
  flex flex-1 justify-between p-5 text-white
  sm:hidden
`
const Container = tw.div`
hidden px-5 py-6 justify-between  text-fontColor-100 items-center
md:px-40 
sm:px-10 sm:flex  
`
const LogoContainer = tw.div`
flex h-10 items-baseline
`
const List = tw.div`
flex items-center gap-6 list-none
`