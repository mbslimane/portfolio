import React from 'react'
import tw from 'tailwind-styled-components'
import { Wrapper } from '../style/twS'
import sImg from '../assets/ss.png'
import Header from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'

const Footer = () => {
    return (

        <Wrapper className='bg-bgGray-100' >
            <Container>
                <div className="">
                    <LogoContainer>
                        <img src={sImg} alt="logo" className='h-10 ' />
                        <h2 className='text-fontColor-400 pl-0.5'>oloman</h2>
                    </LogoContainer>

                    <H3 className='md:w-1/2'>  personnel portfolio that shows the skill and the project that I have build</H3>
                </div>

                <div className="flex flex-col md:items-end">
                    <nav className=' '>
                        <List>
                            <Link
                                className='cursor-pointer'
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            // onSetActive={handleSetActive}
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
                            // onSetActive={handleSetActive}
                            >
                                About
                            </Link>


                            {/*  Projects  */}
                            <NavLink
                                className='cursor-pointer active:bg-red'
                                // activeClass="active"
                                to="portfolio"
                            >
                                Project
                            </NavLink>

                            {/* path */}
                            <NavLink
                                className='cursor-pointer'
                                to="path"
                            >
                                Path
                            </NavLink>

                            {/*  Contact Me */}
                            <NavLink
                                className='cursor-pointer'
                                // activeClass="active"
                                to="contact"
                            >
                                contact
                            </NavLink>
                        </List>
                    </nav>
                    <Logos >
                        <Link to='' onClick={() => { window.location.href = 'https://github.com/mbslimane' }}  >

                            <FontAwesomeIcon className='border border-fontColor-400 rounded-full p-2 cursor-pointer' icon={faGithub} size='xl' />
                        </Link>
                        <Link to='' onClick={() => { window.location.href = 'https://www.instagram.com/slimane.mb/' }}  >
                            <FontAwesomeIcon className='border border-fontColor-400 rounded-full p-2 cursor-pointer' icon={faInstagram} size='xl' />
                        </Link>
                        <Link to='' onClick={() => { window.location.href = 'https://github.com/mbslimane' }}  >
                            <FontAwesomeIcon className='border border-fontColor-400 rounded-full p-2 cursor-pointer' icon={faLinkedin} size='xl' />
                        </Link>
                    </Logos>
                </div>
            </Container>
            <H3 className='text-fontColor-400 w-full flex justify-center'>copyright 2024 © all right reserved design by slimaneMb</H3>
        </Wrapper >
    )
}

export default Footer

const Container = tw.div`
    pt-5 grid grid-cols-1 justify-center md:flex md:justify-between border-b-4 w-full
`
const List = tw.div`
    sm:flex items-center gap-6 list-none hidden
`
const LogoContainer = tw.div`
    flex h-10 items-baseline
`
const Logos = tw.div`
 py-4 flex items-center md:justify-center my-6 gap-2

`
const H3 = tw.h3` 
    text-fontColor-200 py-3 
`