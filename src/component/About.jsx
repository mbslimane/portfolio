import React from 'react'
import tw from 'tailwind-styled-components'
import myImg2 from '../assets/myImg2.jpg'
import { BgSvg, BgTexte, H1, LineContainer, LinePreTitle } from '../style/twS'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Element } from 'react-scroll'

const About = () => {
    return (
        <Wrapper >
            <Element id='about' name='about'></Element>
            <Container>
                <Img src={myImg2}></Img>
                <AboutPContainer>
                    <p >
                        "Hi, I'm Slimane, a web developer passionate about creating
                        immersive online experiences. With expertise in HTML, CSS, and JavaScript,
                        I bring designs to life, ensuring they're both visually appealing and user-friendly.
                        From crafting responsive layouts to optimizing performance, I'm dedicated to delivering
                        exceptional results. Outside of coding,
                        I enjoy staying abreast of web trends and finding design inspiration."
                    </p>
                    <Line />
                    <p className='tracking-wide text-2xl font-thin'>
                        “ Lift your business to new heights with our web development services “
                    </p>
                </AboutPContainer>
                <AboutRight>
                    <LineContainer>
                        <LinePreTitle />
                        <p># ABOUT</p>
                    </LineContainer>
                    <H1 className='tracking-wide'> lets guide you to live in the digital world</H1>
                    <p className='py-5 text-fontColor-100'>
                        about me
                        <FontAwesomeIcon icon={faArrowRight} style={{ color: "white", paddingLeft: 10 }} size='sm' />
                    </p>

                </AboutRight>

            </Container>
            <BgTexte className='-mt-36'>
                <BgSvg>
                    <text x="65%" y="100" fill='transparent' >About</text>
                </BgSvg>
            </BgTexte>
        </Wrapper>
    )
}

export default About

const Wrapper = tw.div`
    py-4
    sm:py-10   
    lg:py-28   
    bg-bgGray-100
    
    
 `
const Container = tw.div`
gap-11 flex flex-col-reverse  items-center pb-32
sm:flex-row lg:px-40 sm:pb-0 sm:items-start
justify-between

`
const Img = tw.img`
w-64 h-80 object-cover rounded-xl
sm:w-80 sm:h-fit
md:w-60
transition duration-300 ease-in-out hover:scale-110
`

const AboutPContainer = tw.div`
    text-justify
    text-fontColor-200
    w-1/3
    min-w-80
`
const AboutRight = tw.div`
    w-3/4    
    sm:w-1/3

`
const Line = tw.div`
    w-full border-t my-10
`
const Text = tw.text`
`