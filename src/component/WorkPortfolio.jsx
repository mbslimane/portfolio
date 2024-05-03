import React from 'react'
import tw from 'tailwind-styled-components'
import { H1, LineContainer, Wrapper } from '../style/twS'
import myProject1 from '../assets/myProject1.jpg'
import myProject2 from '../assets/myProject2.jpg'
import myProject3 from '../assets/myProject3.jpg'
import myProject4 from '../assets/myProject4.jpg'


const WorkPortfolio = () => {
    return (
        <Wrapper className='bg-bgGray-200 flex'>
            <Title>
                <LineContainer>
                    <p># work & portfolio</p>
                </LineContainer>
                <H1>My project</H1>
            </Title>
            <ProjectsContainer>
                <ProjectsRow className='mb-14'>
                    <ImgContainer>
                        <div className="overflow-hidden">
                            <Img className=' transition duration-300 ease-in-out hover:scale-110' src={myProject1} />
                        </div>
                        <ProjectTitle># Dashboard app</ProjectTitle>
                        <ProjectDesc>dizinv is real time dashboard web app </ProjectDesc>
                    </ImgContainer>
                    <ImgContainer>
                        <ImgWrapperPm>
                            <div className=' w-2/3 overflow-hidden'>
                                <Img className=' transition duration-300 ease-in-out hover:scale-110' src={myProject2} alt="" />
                            </div>
                            <ProjectTitle># Communication apps</ProjectTitle>
                            <ProjectDesc>lamasocial is social media app to communicate with ones community</ProjectDesc>
                        </ImgWrapperPm>
                    </ImgContainer>
                </ProjectsRow>
                <ProjectsRow>
                    <ImgContainer>
                        <ImgWrapperPm>
                            <div className="overflow-hidden w-2/3">
                                <Img className='transition duration-300 ease-in-out hover:scale-110' src={myProject3} alt="" />

                            </div>
                            <ProjectTitle># weather apps</ProjectTitle>
                            <ProjectDesc>a responsive web app that allows you to get the forecast for any spot on earth </ProjectDesc>
                        </ImgWrapperPm>
                    </ImgContainer>
                    <ImgContainer>
                        <div className="overflow-hidden">
                            <Img className='' src={myProject4} alt="" />
                        </div>
                        <ProjectTitle># Hanger man</ProjectTitle>
                        <ProjectDesc>a game that gives you hints to find the word we seek </ProjectDesc>
                    </ImgContainer>
                </ProjectsRow>
            </ProjectsContainer>
        </Wrapper>
    )
}

export default WorkPortfolio

const Title = tw.div`
    w-1/4
    
`
const ProjectsContainer = tw.div`
    flex-col
    w-3/4
    py-10
    justify-between
    
`
const ProjectsRow = tw.div`
    flex
    items-center
    
`

const ImgContainer = tw.div`
    w-1/2
    justify-center
    overflow-hidden
`
const ImgWrapperPm = tw.div`
    flex
    flex-col
    items-center
`

const ProjectTitle = tw.h6`
    w-2/3
    py-2
    text-fontColor-400
    tracking-widest
    first-letter:uppercase
`

const ProjectDesc = tw.p`
    w-2/3 
    text-xl
    first-letter:uppercase
    text-fontColor-200
`
const Img = tw.img`
transition duration-300 ease-in-out hover:scale-110
`