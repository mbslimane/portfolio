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
            <Container>
                <Element id='about' name='about'></Element>
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
                    <Text x="65%" y="100" fill='transparent' >About</Text>
                </BgSvg>
            </BgTexte>
        </Wrapper>
    )
}

export default About

const Container = tw.div`
px-40 
flex gap-11
justify-between
`
const Wrapper = tw.div`
    py-28   
    bg-bgGray-100
`
const Img = tw.img`
    w-80 h-fit
`

const AboutPContainer = tw.div`
    text-justify
    text-fontColor-200
    w-1/3
`

const AboutRight = tw.div`
    w-1/3
`

const Line = tw.div`
    w-full border-t my-10
`

const Text = tw.text`
`