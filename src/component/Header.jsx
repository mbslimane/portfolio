import React from 'react'
import sImg from '../assets/ss.png'
import { useInfo } from '../contexts/userContext/InfoContext'
import tw from "tailwind-styled-components"
import { Button } from '../style/twS';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

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

        <nav>
          <List>
            {/* Home */}
            <Link
              className='cursor-pointer'
              activeClass="active"
              to="home"
            >
              Home
            </Link>

            {/* About */}
            <Link
              className='cursor-pointer'
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>

            {/*  Projects  */}
            <Link
              className='cursor-pointer '
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Project
            </Link>

            {/* path */}
            <Link
              className='cursor-pointer'
              activeClass="active"
              to="path"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Path
            </Link>
          </List>
        </nav>

        <div>
          <Link
            className='cursor-pointer'
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <Button >contact</Button>
          </Link>

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