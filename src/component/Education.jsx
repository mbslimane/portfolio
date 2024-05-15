import React from 'react'
import { H1, LineContainer, LinePreTitle, Wrapper } from '../style/twS'
import tw from 'tailwind-styled-components'
import myImg4 from '../assets/myImg3.jpg'
import { Element } from 'react-scroll'


const Education = () => {
    return (
        <Wrapper className='bg-bgGray-100'>
            <Element id='path' name='path'></Element>
            <Container>
                <Experienced>
                    <LineContainer>
                        <LinePreTitle></LinePreTitle>
                    </LineContainer>
                    <Title>Experiences</Title>
                    <EventContainer>
                        <DateDisplay>in 2022</DateDisplay>
                        <EventDisc>dizinv <br />smart univ app with an IOT
                            insertion using raspberry PI
                            <Span>univ constantine 2</Span>
                        </EventDisc>
                    </EventContainer>
                    <EventContainer>
                        <DateDisplay>in 2022</DateDisplay>
                        <EventDisc>dizinv <br />smart univ app with an IOT
                            insertion using raspberry PI
                            <Span>univ constantine 2</Span>
                        </EventDisc>
                    </EventContainer>
                </Experienced>


                <Educated>
                    <LineContainer>
                        <LinePreTitle></LinePreTitle>
                    </LineContainer>
                    <Title >Education</Title>
                    <EventContainer>
                        <DateDisplay>IN 2019</DateDisplay>
                        <EventDisc>BAC<br /> get my baccalaureate
                            <Span>institute AMMI SAID</Span>
                        </EventDisc>
                    </EventContainer>
                    <EventContainer>
                        <DateDisplay>in 2022</DateDisplay>
                        <EventDisc >baccalaureate <br />get my engineering degree in software engineering
                            <Span>univ constantine 2</Span>
                        </EventDisc>
                    </EventContainer>
                    <EventContainer>
                        <DateDisplay>in 2023</DateDisplay>
                        <EventDisc>Coursera  <br />react dev course
                            <Span>Online Course</Span>
                        </EventDisc>
                    </EventContainer>
                </Educated>
                <MyimgContainer>
                    <Img className='w-64' src={myImg4} alt="" />
                </MyimgContainer>
            </Container>
        </Wrapper>
    )
}
export default Education

const Container = tw.div`
    grid grid-cols-1 md:grid-cols-3 md:gap-4 pb-7
`
const Experienced = tw.div`
    mx-auto
`
const Educated = tw.div`
    mx-auto
`
const MyimgContainer = tw.div`
    items-center flex justify-center object-cover
`
const EventContainer = tw.div`
    flex justify-between my-8 mr-3
`
const DateDisplay = tw.h1`
    w-1/2 text-xl uppercase first-letter:uppercasetext-fontColor-200
`
const Title = tw.h1`
    text-3xl font-bold w-60 text-fontColor-100 tracking-widest
`
const Span = tw.span`
    block text-fontColor-400 first-letter:uppercase
`
const EventDisc = tw.p`
    w-full
`
const Img = tw.img`
    rounded-lg object-cover
    transition duration-300 ease-in-out hover:scale-110
`