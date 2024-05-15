import React from 'react'
import tw from 'tailwind-styled-components'
import { H1, LineContainer, Wrapper } from '../style/twS'
import myProject1 from '../assets/myProject1.jpg'
import myProject2 from '../assets/myProject2.jpg'
import myProject3 from '../assets/myProject3.jpg'
import myProject4 from '../assets/myProject4.jpg'
import { Element } from 'react-scroll'
import { useNavigate } from 'react-router-dom'


const WorkPortfolio = () => {
    const navigate = useNavigate()
    return (
        <Wrapper className='bg-bgGray-200'>
            <Element id='portfolio' name='portfolio'></Element>
            <Title>
                <LineContainer>
                    <p># work & portfolio</p>
                </LineContainer>
                <H1>My project</H1>
            </Title>

            <Container>
                <Projects>
                    <Project>
                        <ImgContainer >
                            <Img src={myProject1} />
                        </ImgContainer>
                        <ProjectTitle># Dashboard app</ProjectTitle>
                        <ProjectDesc>dizinv is real time dashboard web app </ProjectDesc>
                    </Project>

                    <Project>
                        <ImgContainer>
                            <Img src={myProject2} alt="" />
                        </ImgContainer>
                        <ProjectTitle># Communication apps</ProjectTitle>
                        <ProjectDesc>lamasocial is social media app to communicate with ones community</ProjectDesc>
                    </Project>

                    <Project onClick={() => { window.location.href = 'https://mbslimane.github.io/weather-app/' }}>
                        <ImgContainer>
                            <Img src={myProject3} alt="" />
                        </ImgContainer>
                        <ProjectTitle># weather apps</ProjectTitle>
                        <ProjectDesc>a responsive web app that allows you to get the forecast for any spot on earth </ProjectDesc>
                    </Project>

                    <Project >
                        <ImgContainer >
                            <Img onClick={() => { console.log("ffff"), window.location.href = 'https://mbslimane.github.io/hangManGame/' }} src={myProject4} alt="" />
                        </ImgContainer>
                        <ProjectTitle># Hanger man</ProjectTitle>
                        <ProjectDesc>a game that gives you hints to find the word we seek </ProjectDesc>
                    </Project>
                </Projects>
            </Container>
        </Wrapper>
    )
}

export default WorkPortfolio

const Title = tw.div`
    w-fit  inline-block
`
const Project = tw.div` 
    flex flex-col  items-center md:p-4  
`
const Container = tw.div`
    w-full flex justify-center items-center py-4 
`
const Projects = tw.div`
    grid grid-cols-1 md:grid-cols-2 gap-4 md:w-4/5
`
const ImgContainer = tw.div`
    h-72 w-72 my-3 flex justify-center
`
const ProjectTitle = tw.h6`
    max-md:w-2/3 py-2 text-fontColor-400 tracking-widest first-letter:uppercase 
`
const ProjectDesc = tw.p`
    max-md:w-2/3 text-xl first-letter:uppercase text-fontColor-200 text-justify
`
const Img = tw.img`
    rounded-lg shadow-lg h-72 w-full object-cover
    transition duration-300 ease-in-out hover:scale-110
`