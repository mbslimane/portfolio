import React from 'react'
import tw from 'tailwind-styled-components'
import { Wrapper } from '../style/twS'
import sImg from '../assets/ss.png'
import Header from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

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
                            <li className=''>
                                <a rel="stylesheet" href="#" >Home</a>
                            </li>
                            <li className=''>
                                <a href="#">About Me</a>
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
                    <Logos className="  ">
                        <FontAwesomeIcon style={{ border: "1px solid #fa5d36", padding: 8, marginInline: 5, borderRadius: 50, cursor: 'pointer' }} icon={faGithub} size='xl' />
                        <FontAwesomeIcon style={{ border: "1px solid #fa5d36", padding: 8, marginInline: 5, borderRadius: 50, cursor: 'pointer' }} icon={faInstagram} size='xl' />
                        <FontAwesomeIcon style={{ border: "1px solid #fa5d36", padding: 8, marginInline: 5, borderRadius: 50, cursor: 'pointer' }} icon={faLinkedin} size='xl' />
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
 py-4 flex items-center md:justify-center my-6

`
const H3 = tw.h3` 
    text-fontColor-200 py-3 
`