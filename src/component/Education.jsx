import React from 'react'
import { H1, LineContainer, LinePreTitle, Wrapper } from '../style/twS'
import tw from 'tailwind-styled-components'
import myImg4 from '../assets/myImg3.jpg'


const Education = () => {
    return (
        <Wrapper className='bg-bgGray-100'>
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
                    <img className='w-64' src={myImg4} alt="" />
                </MyimgContainer>
            </Container>
        </Wrapper>
    )
}
export default Education
//Styling

const Container = tw.div`
    flex
`

const Experienced = tw.div`
    w-1/3 mr-12
`
const Educated = tw.div`
    w-1/3
`
const MyimgContainer = tw.div`
    w-1/3 justify-end items-center flex
`

const EventContainer = tw.div`
    flex
    justify-between
    my-8
    mr-3
`

const DateDisplay = tw.h1`
    w-1/2
    text-xl
    uppercase
    first-letter:uppercase
    text-fontColor-200
`

//  ${className = 'tracking-widest bg-fontColor-400'}
const Title = tw.h1`
text-3xl font-bold w-60 text-fontColor-100
 tracking-widest
`
const Span = tw.span`
    block text-fontColor-400 first-letter:uppercase
`
const EventDisc = tw.p`
    w-full
`